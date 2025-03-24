import React, { FC } from "react";
  import Applens from "../Applens";
  
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
        <Applens width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  