import React, { FC } from "react";
  import FSxforOpenZFS from "../FSxforOpenZFS";
  
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
        <FSxforOpenZFS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  