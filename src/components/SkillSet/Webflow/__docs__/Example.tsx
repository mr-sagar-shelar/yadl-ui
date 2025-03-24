import React, { FC } from "react";
  import Webflow from "../Webflow";
  
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
        <Webflow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  