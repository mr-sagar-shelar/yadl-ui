import React, { FC } from "react";
  import CompletedTasks from "../CompletedTasks";
  
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
        <CompletedTasks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  