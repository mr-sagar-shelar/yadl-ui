import React, { FC } from "react";
  import FreeTrial from "../FreeTrial";
  
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
        <FreeTrial width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  