import React, { FC } from "react";
  import MediaFile from "../MediaFile";
  
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
        <MediaFile width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  