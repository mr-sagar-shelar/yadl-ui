import React, { FC } from "react";
  import Fans from "../Fans";
  
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
        <Fans width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  