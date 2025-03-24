import React, { FC } from "react";
  import SimpleEmailService from "../SimpleEmailService";
  
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
        <SimpleEmailService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  