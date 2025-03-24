import React, { FC } from "react";
  import AppreciateIt from "../AppreciateIt";
  
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
        <AppreciateIt width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  