import React, { FC } from "react";
  import TemplateSpecs from "../TemplateSpecs";
  
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
        <TemplateSpecs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  