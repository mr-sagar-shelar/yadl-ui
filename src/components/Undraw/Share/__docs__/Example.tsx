import React, { FC } from "react";
  import Share from "../Share";
  
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
        <Share width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  