import React, { FC } from "react";
  import BlobBlock from "../BlobBlock";
  
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
        <BlobBlock width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  