import React, { FC } from "react";
  import Gaming from "../Gaming";
  
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
        <Gaming width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  