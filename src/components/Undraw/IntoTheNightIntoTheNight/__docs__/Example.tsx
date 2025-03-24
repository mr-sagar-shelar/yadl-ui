import React, { FC } from "react";
  import IntoTheNightIntoTheNight from "../IntoTheNightIntoTheNight";
  
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
        <IntoTheNightIntoTheNight width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  