import React, { FC } from "react";
  import OnlineCv from "../OnlineCv";
  
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
        <OnlineCv width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  