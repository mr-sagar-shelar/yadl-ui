import React, { FC } from "react";
  import Monitron from "../Monitron";
  
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
        <Monitron width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  