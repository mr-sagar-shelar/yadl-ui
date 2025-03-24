import React, { FC } from "react";
  import ProudCoder from "../ProudCoder";
  
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
        <ProudCoder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  