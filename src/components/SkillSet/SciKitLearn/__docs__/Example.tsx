import React, { FC } from "react";
  import SciKitLearn from "../SciKitLearn";
  
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
        <SciKitLearn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  