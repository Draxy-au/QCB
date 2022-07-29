export async function search(options = {}) {
  const params = {
    ...options,
  };

  if (options.nextCursor) {
    params.next_cursor = options.nextCursor;
    delete params.nextCursor;
  }

  const paramStrings = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramStrings}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_CLOUD_ID +
            ":" +
            process.env.CLOUDINARY_CLOUD_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());

  console.log("results:", results);

  return results;
}

export async function getFolders(options = {}) {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/folders/qcb_website/gallery`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_CLOUD_ID +
            ":" +
            process.env.CLOUDINARY_CLOUD_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());

  return results;
}

export function mapImageResources(resources) {
  return resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });
}
