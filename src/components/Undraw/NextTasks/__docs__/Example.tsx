import React, { FC } from "react";
  import NextTasks from "../NextTasks";
  
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
        <NextTasks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  