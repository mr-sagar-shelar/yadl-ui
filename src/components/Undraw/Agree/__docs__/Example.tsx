import React, { FC } from "react";
  import Agree from "../Agree";
  
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
        <Agree width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  