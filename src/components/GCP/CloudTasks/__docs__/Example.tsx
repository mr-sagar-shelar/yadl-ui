import React, { FC } from "react";
  import CloudTasks from "../CloudTasks";
  
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
        <CloudTasks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  