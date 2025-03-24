import React, { FC } from "react";
  import DigitalTwins from "../DigitalTwins";
  
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
        <DigitalTwins width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  