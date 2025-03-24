import React, { FC } from "react";
  import Meditating from "../Meditating";
  
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
        <Meditating width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  