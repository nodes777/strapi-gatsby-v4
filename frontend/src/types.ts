import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";
import {} from "gatsby-plugin-mdx";

export type Block =
  | STRAPI__COMPONENT_SHARED_RICH_TEXT
  | STRAPI__COMPONENT_SHARED_MEDIA;

export enum BlockTypes {
  STRAPI__COMPONENT_SHARED_RICH_TEXT = "STRAPI__COMPONENT_SHARED_RICH_TEXT",
  STRAPI__COMPONENT_SHARED_MEDIA = "STRAPI__COMPONENT_SHARED_MEDIA",
}

export const isRichText = (
  block: Block
): block is STRAPI__COMPONENT_SHARED_RICH_TEXT =>
  block.__typename === BlockTypes.STRAPI__COMPONENT_SHARED_RICH_TEXT;

export const isMedia = (
  block: Block
): block is STRAPI__COMPONENT_SHARED_MEDIA =>
  block.__typename === BlockTypes.STRAPI__COMPONENT_SHARED_MEDIA;

export interface STRAPI__COMPONENT_SHARED_RICH_TEXT {
  __typename: BlockTypes.STRAPI__COMPONENT_SHARED_RICH_TEXT;
  richTextBody: {
    data: {
      id: string;
      childMdx: { body: string };
    };
    __typename: string;
  };
}

export interface STRAPI__COMPONENT_SHARED_MEDIA {
  __typename: BlockTypes.STRAPI__COMPONENT_SHARED_MEDIA;
  file: {
    mime: MimeFileTypes.IMAGE_PNG;
    localFile: ImageDataLike;
  };
}

enum MimeFileTypes {
  IMAGE_PNG = "image/png",
}
