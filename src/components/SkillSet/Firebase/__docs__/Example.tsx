import React, { FC } from "react";
  import Firebase from "../Firebase";
  
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
        <Firebase width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  