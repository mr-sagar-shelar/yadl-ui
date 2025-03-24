import React, { FC } from "react";
  import Welcoming from "../Welcoming";
  
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
        <Welcoming width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  