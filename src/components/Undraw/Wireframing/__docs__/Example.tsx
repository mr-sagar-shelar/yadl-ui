import React, { FC } from "react";
  import Wireframing from "../Wireframing";
  
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
        <Wireframing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  