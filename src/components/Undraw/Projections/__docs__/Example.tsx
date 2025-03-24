import React, { FC } from "react";
  import Projections from "../Projections";
  
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
        <Projections width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  