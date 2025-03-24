import React, { FC } from "react";
  import Eventarc from "../Eventarc";
  
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
        <Eventarc width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  