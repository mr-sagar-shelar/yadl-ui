import React, { FC } from "react";
  import WorkMail from "../WorkMail";
  
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
        <WorkMail width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  