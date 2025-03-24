import React, { FC } from "react";
  import MobileMarketing from "../MobileMarketing";
  
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
        <MobileMarketing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  