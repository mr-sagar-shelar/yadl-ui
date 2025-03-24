import React, { FC } from "react";
  import Support from "../Support";
  
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
        <Support width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  