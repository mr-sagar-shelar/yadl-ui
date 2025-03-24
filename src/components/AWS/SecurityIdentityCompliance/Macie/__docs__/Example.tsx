import React, { FC } from "react";
  import Macie from "../Macie";
  
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
        <Macie width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  