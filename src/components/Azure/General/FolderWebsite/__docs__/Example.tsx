import React, { FC } from "react";
  import FolderWebsite from "../FolderWebsite";
  
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
        <FolderWebsite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  