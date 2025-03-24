import React, { FC } from "react";
  import PersonalNotebook from "../PersonalNotebook";
  
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
        <PersonalNotebook width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  