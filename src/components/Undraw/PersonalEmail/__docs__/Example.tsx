import React, { FC } from "react";
  import PersonalEmail from "../PersonalEmail";
  
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
        <PersonalEmail width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  