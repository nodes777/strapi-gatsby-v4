import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Block, BlockTypes, isMedia } from "../types";
import Seo from "../components/seo";
import BlocksRenderer from "../components/blocks-renderer";
import Headings from "../components/headings";
import LayoutRoot from "../components/layout";

import * as styles from "../styles/about.module.css";

interface AboutQueryResponse {
  strapiAbout: { title: string; blocks: Block[] };
}

const about: React.FC = () => {
  // TODO: get image from strapiAbout more specifically
  const { strapiAbout } = useStaticQuery<AboutQueryResponse>(graphql`
    query {
      strapiAbout {
        title
        blocks {
          ...Blocks
        }
      }
    }
  `);
  const { title, blocks } = strapiAbout;
  console.log(strapiAbout);

  const seo = {
    metaTitle: title,
    metaDescription: title,
  };

  const imageBlock = blocks.find(isMedia);
  console.log(imageBlock);

  const profilePic = imageBlock && getImage(imageBlock.file.localFile);
  return (
    <LayoutRoot>
      <Seo seo={seo} />
      <Headings title={strapiAbout.title} />
      <BlocksRenderer blocks={blocks} />
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.titleContainer}>
          <div className={styles.emptyDiv}></div>
          <div className={styles.imageContainer}>
            {profilePic ? (
              <GatsbyImage image={profilePic} alt="Taylor as a dog avatar" />
            ) : null}
          </div>
          <div className={styles.taylorContainer}>
            <h2>Taylor</h2>
            <div className={styles.textContainer}>
              <p>
                Taylor is a developer, backpacker, naturalist and{" "}
                <a href="https://taylornodell.bandcamp.com/">musician</a>. He's
                probably in Australia.
              </p>
            </div>
            <div className={styles.textContainer}>
              <p>
                This photo blog was made with Strapi and Gatsby. You can see the{" "}
                <a href="https://github.com/nodes777/strapi-gatsby-typescript-blog">
                  source code on github
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutRoot>
  );
};
// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "prof.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default about;
