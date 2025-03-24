import React, { FC } from "react";
  import Pubsub from "../Pubsub";
  
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
        <Pubsub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  