import React, { FC } from "react";
  import Font from "../Font";
  
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
        <Font width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  