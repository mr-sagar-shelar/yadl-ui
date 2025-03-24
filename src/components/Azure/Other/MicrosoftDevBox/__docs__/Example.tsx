import React, { FC } from "react";
  import MicrosoftDevBox from "../MicrosoftDevBox";
  
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
        <MicrosoftDevBox width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  