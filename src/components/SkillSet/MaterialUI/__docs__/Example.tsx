import React, { FC } from "react";
  import MaterialUI from "../MaterialUI";
  
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
        <MaterialUI width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  