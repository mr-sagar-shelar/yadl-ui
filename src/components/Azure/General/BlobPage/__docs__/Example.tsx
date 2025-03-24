import React, { FC } from "react";
  import BlobPage from "../BlobPage";
  
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
        <BlobPage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  