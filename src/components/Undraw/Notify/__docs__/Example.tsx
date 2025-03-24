import React, { FC } from "react";
  import Notify from "../Notify";
  
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
        <Notify width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  