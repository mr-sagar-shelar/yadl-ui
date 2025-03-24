import React, { FC } from "react";
  import Services from "../Services";
  
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
        <Services width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  