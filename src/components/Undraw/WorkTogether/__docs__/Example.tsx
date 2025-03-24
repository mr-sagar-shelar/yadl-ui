import React, { FC } from "react";
  import WorkTogether from "../WorkTogether";
  
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
        <WorkTogether width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  