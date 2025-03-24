import React, { FC } from "react";
  import Neighbors from "../Neighbors";
  
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
        <Neighbors width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  