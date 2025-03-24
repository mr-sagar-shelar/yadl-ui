import React, { FC } from "react";
  import Welcome from "../Welcome";
  
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
        <Welcome width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  