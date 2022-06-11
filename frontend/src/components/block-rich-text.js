import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlockRichText = ({ data }) => {
  return (
    <div className="prose mx-auto py-8">
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMdx.body,
        }}
      /> */}
      <MDXRenderer>{data.richTextBody.data.childMdx.body}</MDXRenderer>
    </div>
  );
};

export default BlockRichText;
