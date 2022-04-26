import sanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ju0h8eaa",
  dataset: "production",
  apiVersion: "2022-04-25",
  useCdn: true,
  token: process.env.NEXT_PUPLIC_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
