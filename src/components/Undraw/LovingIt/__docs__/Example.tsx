import React, { FC } from "react";
  import LovingIt from "../LovingIt";
  
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
        <LovingIt width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  