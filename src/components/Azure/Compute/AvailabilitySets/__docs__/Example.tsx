import React, { FC } from "react";
  import AvailabilitySets from "../AvailabilitySets";
  
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
        <AvailabilitySets width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  