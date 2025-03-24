import React, { FC } from "react";
  import RoboMaker from "../RoboMaker";
  
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
        <RoboMaker width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  