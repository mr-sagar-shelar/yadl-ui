import React, { FC } from "react";
  import Gradle from "../Gradle";
  
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
        <Gradle width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  