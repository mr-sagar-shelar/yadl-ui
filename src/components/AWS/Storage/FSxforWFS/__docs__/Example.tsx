import React, { FC } from "react";
  import FSxforWFS from "../FSxforWFS";
  
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
        <FSxforWFS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  