import React, { FC } from "react";
  import Gherkin from "../Gherkin";
  
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
        <Gherkin width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  