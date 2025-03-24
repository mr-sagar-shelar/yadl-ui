import React, { FC } from "react";
  import Joyride from "../Joyride";
  
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
        <Joyride width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  