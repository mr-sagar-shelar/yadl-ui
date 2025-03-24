import React, { FC } from "react";
  import AppData from "../AppData";
  
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
        <AppData width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  