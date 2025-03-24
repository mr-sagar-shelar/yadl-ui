import React, { FC } from "react";
  import PureLovePureLove from "../PureLovePureLove";
  
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
        <PureLovePureLove width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  