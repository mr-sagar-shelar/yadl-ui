import React, { FC } from "react";
  import WebsitePower from "../WebsitePower";
  
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
        <WebsitePower width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  