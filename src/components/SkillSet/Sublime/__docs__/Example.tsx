import React, { FC } from "react";
  import Sublime from "../Sublime";
  
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
        <Sublime width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  