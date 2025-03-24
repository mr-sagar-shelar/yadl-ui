import React, { FC } from "react";
  import FileSearch from "../FileSearch";
  
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
        <FileSearch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  