import React, { FC } from "react";
  import CodeGuru from "../CodeGuru";
  
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
        <CodeGuru width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  