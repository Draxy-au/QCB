import Navbar from "@components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { search, mapImageResources, getFolders } from "@lib/cloudinary";

import styles from "./Gallery.module.scss";

import { useSession } from "next-auth/react";

export default function Gallery({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
  totalCount,
}) {
  const { data: session, status } = useSession();
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const [activeFolder, setActiveFolder] = useState("");

  async function handleLoadMore(event) {
    event.preventDefault();

    const results = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
        expression: `folder="${activeFolder}"`,
      }),
    }).then((r) => r.json());

    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);
    setImages((prev) => {
      return [...prev, ...images];
    });
    setNextCursor(updatedNextCursor);
  }

  function handleOnFolderClick(event) {
    const folderPath = event.target.dataset.folderPath;
    setActiveFolder(folderPath);
    setNextCursor(undefined);
    setImages([]);
  }

  useEffect =
    (() => {
      console.log("folders", folders);
    },
    []);

  useEffect(() => {
    (async function run() {
      const results = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({
          nextCursor,
          expression: `folder="${activeFolder}"`,
        }),
      }).then((r) => r.json());

      const { resources, next_cursor: updatedNextCursor } = results;

      const images = mapImageResources(resources);
      setImages((prev) => {
        return [...prev, ...images];
      });
      setNextCursor(updatedNextCursor);
    })();
  }, [activeFolder]);

  return (
    <div className={styles.gallery_container}>
      {status === "authenticated" && (
        <div className="pages">
          <Navbar current="Members" />
          <h1>Gallery</h1>

          <ul className={styles.folders} onClick={handleOnFolderClick}>
            {folders.map((folder) => {
              return (
                <li key={folder.path}>
                  <button data-folder-path={folder.path}>{folder.name}</button>
                </li>
              );
            })}
          </ul>

          <ul className={styles.images}>
            {images.map((image) => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <div className={styles.imageImage}>
                      <Link href={image.image}>
                        <a target="_blank">
                          <Image
                            width={image.width}
                            height={image.height}
                            src={image.image}
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={styles.button_area}>
            {images.length < totalCount && (
              <button
                className={styles.load_more_button}
                onClick={handleLoadMore}
              >
                Load More...
              </button>
            )}
            {activeFolder != "" && (
              <Link href={`Gallery/Upload/${activeFolder.slice(20)}`}>
                <a>
                  <button className={styles.upload_button}>Upload Photo</button>
                </a>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const results = await search({
    expression: 'folder="qcb_website/gallery"',
  });

  const {
    resources,
    next_cursor: nextCursor,
    total_count: totalCount,
  } = results;

  const images = mapImageResources(resources);

  const { folders } = await getFolders();

  return {
    props: { images, nextCursor: nextCursor | false, folders, totalCount },
  };
}
