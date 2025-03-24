import React, { FC } from "react";
  import Reading from "../Reading";
  
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
        <Reading width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  