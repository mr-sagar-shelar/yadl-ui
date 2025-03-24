import React, { FC } from "react";
  import Outpostsservers from "../Outpostsservers";
  
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
        <Outpostsservers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  