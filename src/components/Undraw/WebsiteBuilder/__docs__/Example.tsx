import React, { FC } from "react";
  import WebsiteBuilder from "../WebsiteBuilder";
  
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
        <WebsiteBuilder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  