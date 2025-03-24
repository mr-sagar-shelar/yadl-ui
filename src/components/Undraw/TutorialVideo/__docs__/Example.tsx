import React, { FC } from "react";
  import TutorialVideo from "../TutorialVideo";
  
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
        <TutorialVideo width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  