import React, { FC } from "react";
import ProductExplainer from "../ProductExplainer";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ProductExplainer width="500px" height="500px" />
    </div>
  );
};

export default Example;
