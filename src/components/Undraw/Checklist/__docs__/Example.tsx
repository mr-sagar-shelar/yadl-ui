import React, { FC } from "react";
  import Checklist from "../Checklist";
  
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
        <Checklist width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  