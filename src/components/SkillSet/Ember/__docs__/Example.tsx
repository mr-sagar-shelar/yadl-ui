import React, { FC } from "react";
  import Ember from "../Ember";
  
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
        <Ember width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  