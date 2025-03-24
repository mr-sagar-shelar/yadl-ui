import React, { FC } from "react";
  import FolderBlank from "../FolderBlank";
  
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
        <FolderBlank width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  