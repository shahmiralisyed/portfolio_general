import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ldkyu8cy",
  dataset: "production",
  apiVersion: "2023-06-11",
  useCdn: true,
  token:
    "skGApnELCLxIfvWkjiyp0ATJYDS6xIgrzeJtdUhHfg3319zQSluZOhGNHZS2IveMAfXcgzq8D5mw90GPRvlz88dAHXzMLLtMPM7afgedRmS6TdRkisZrC3GfGKk2fb0NIEt3BFwseiCSrmTUx8lvikBtTrEvzzosWAqfPyD4Ce5JODQIl9fz",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
