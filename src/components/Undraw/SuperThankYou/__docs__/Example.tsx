import React, { FC } from "react";
  import SuperThankYou from "../SuperThankYou";
  
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
        <SuperThankYou width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  