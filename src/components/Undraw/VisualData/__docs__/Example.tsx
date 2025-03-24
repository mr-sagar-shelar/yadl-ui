import React, { FC } from "react";
  import VisualData from "../VisualData";
  
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
        <VisualData width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  