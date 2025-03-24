import React, { FC } from "react";
  import FTP from "../FTP";
  
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
        <FTP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  