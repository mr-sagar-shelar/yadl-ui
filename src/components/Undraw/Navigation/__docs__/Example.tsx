import React, { FC } from "react";
  import Navigation from "../Navigation";
  
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
        <Navigation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  