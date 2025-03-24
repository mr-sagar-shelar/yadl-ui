import React, { FC } from "react";
  import OpenShift from "../OpenShift";
  
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
        <OpenShift width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  