import React, { FC } from "react";
  import Personalize from "../Personalize";
  
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
        <Personalize width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  