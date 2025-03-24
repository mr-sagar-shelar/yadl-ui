import React, { FC } from "react";
  import MyWorkspace from "../MyWorkspace";
  
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
        <MyWorkspace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  