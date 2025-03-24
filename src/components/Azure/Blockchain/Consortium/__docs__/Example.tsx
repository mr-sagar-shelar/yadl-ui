import React, { FC } from "react";
  import Consortium from "../Consortium";
  
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
        <Consortium width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  