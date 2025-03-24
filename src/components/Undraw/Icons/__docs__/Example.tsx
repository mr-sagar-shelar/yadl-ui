import React, { FC } from "react";
  import Icons from "../Icons";
  
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
        <Icons width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  