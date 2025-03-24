import React, { FC } from "react";
  import Summer from "../Summer";
  
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
        <Summer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  