import React, { FC } from "react";
  import SecurityHealthAdvisor from "../SecurityHealthAdvisor";
  
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
        <SecurityHealthAdvisor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  