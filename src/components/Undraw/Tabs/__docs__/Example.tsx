import React, { FC } from "react";
  import Tabs from "../Tabs";
  
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
        <Tabs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  