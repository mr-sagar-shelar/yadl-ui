import React, { FC } from "react";
  import ChasingLove from "../ChasingLove";
  
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
        <ChasingLove width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  