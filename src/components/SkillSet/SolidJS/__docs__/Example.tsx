import React, { FC } from "react";
  import SolidJS from "../SolidJS";
  
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
        <SolidJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  