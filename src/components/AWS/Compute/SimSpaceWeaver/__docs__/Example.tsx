import React, { FC } from "react";
  import SimSpaceWeaver from "../SimSpaceWeaver";
  
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
        <SimSpaceWeaver width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  