import React, { FC } from "react";
  import Motherhood from "../Motherhood";
  
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
        <Motherhood width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  