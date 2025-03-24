import React, { FC } from "react";
  import ResumeFolder from "../ResumeFolder";
  
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
        <ResumeFolder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  