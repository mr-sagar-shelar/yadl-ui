import React, { FC } from "react";
  import Amplify from "../Amplify";
  
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
        <Amplify width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  