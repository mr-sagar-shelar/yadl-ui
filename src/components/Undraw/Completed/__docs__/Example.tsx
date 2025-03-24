import React, { FC } from "react";
  import Completed from "../Completed";
  
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
        <Completed width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  