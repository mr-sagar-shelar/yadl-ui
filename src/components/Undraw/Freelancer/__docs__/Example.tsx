import React, { FC } from "react";
  import Freelancer from "../Freelancer";
  
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
        <Freelancer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  