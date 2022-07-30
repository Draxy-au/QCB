import { useState } from "react";
import Navbar from "@components/Navbar";
import styles from "./Upload.module.scss";
import { getSession } from "next-auth/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRouter } from "next/router";
import spinner from "@assets/icons/spinner.gif";
import Image from "next/image";

export default function Upload({ slug }) {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    if (changeEvent.target.files[0]) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    setUploading(true);

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
      formData.append("folder", `qcb_website/gallery/${slug}`);
      formData.append("upload_preset", `qcb_uploads`);

      await fetch(
        `https://api.cloudinary.com/v1_1/queenslandcampingbears/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
    }

    // formData.append("folder", `qcb_website/gallery/${slug}`);
    // formData.append("upload_preset", `qcb_uploads`);

    // const data = await fetch(
    //   `https://api.cloudinary.com/v1_1/queenslandcampingbears/image/upload`,
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // ).then((r) => r.json());

    // setImageSrc(data.secure_url);
    // setUploadData(data);
    setUploading(false);
    router.push("/Gallery");
  }

  const goBack = () => {
    router.push("/Gallery");
  };

  return (
    <div className={styles.upload_container}>
      <Navbar current="Members" />
      <div className={styles.back}>
        <button className={styles.back_button} onClick={() => goBack()}>
          &#xab; Back
        </button>
      </div>
      <div className={styles.upload_area}>
        {uploading && (
          <div>
            <Image src={spinner} alt="" height={30} width={30} />
          </div>
        )}
        {!uploading && (
          <form
            className={styles.form}
            method="post"
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          >
            <p>
              <input type="file" name="file" multiple="multiple" />
            </p>

            <div className={styles.upload_image_container}>
              <img src={imageSrc} alt="" height={350} />
            </div>
            {imageSrc && !uploadData && (
              <p>
                <button>Upload Files</button>
              </p>
            )}

            {uploadData && (
              <code>
                <pre>{JSON.stringify(uploadData, null, 2)}</pre>
              </code>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/Members/Portal",
      },
    };
  }

  const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.hygraph.com/v2/cl5nm23h70znu01ugcgu20nyv/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageMemberSignUp {
        member(where: { email: "${session.user.email}" }) {
          verifiedMember
        }
      }
    `,
  });

  const member = data.data.member;

  if (!member.verifiedMember) {
    return {
      redirect: {
        destination: "/Members/Portal",
      },
    };
  }

  return {
    props: {
      slug,
    },
  };
}
