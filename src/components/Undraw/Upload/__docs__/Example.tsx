import React, { FC } from "react";
  import Upload from "../Upload";
  
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
        <Upload width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  