import React, { FC } from "react";
  import FormRecognizers from "../FormRecognizers";
  
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
        <FormRecognizers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  