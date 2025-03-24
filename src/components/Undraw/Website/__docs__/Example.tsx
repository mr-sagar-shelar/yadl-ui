import React, { FC } from "react";
  import Website from "../Website";
  
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
        <Website width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  