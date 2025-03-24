import React, { FC } from "react";
  import Tauri from "../Tauri";
  
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
        <Tauri width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  