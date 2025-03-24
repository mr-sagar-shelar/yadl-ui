import React, { FC } from "react";
  import SmartHome from "../SmartHome";
  
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
        <SmartHome width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  