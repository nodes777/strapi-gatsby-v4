import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import BlocksRenderer from "../components/blocks-renderer";
import Headings from "../components/headings";
import LayoutRoot from "../components/layout";
import * as styles from "../styles/about.module.css";

// interface AboutProps {
//   data: { file: { childImageSharp: { fluid: any } } };
// }
//const about: React.FC<AboutProps> = ({ data }) => {
interface AboutQueryResponse {
  strapiAbout: { title: string; blocks: any[] };
}

const about: React.FC = () => {
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
            {/* <GatsbyImage
              image={data.file.childImageSharp.fluid}
              //  image={getImage(article?.cover?.localFile)}
              alt="Taylor as a dog avatar"
            /> */}
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
