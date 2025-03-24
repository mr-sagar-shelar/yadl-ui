import React, { FC } from "react";
  import CompleteTask from "../CompleteTask";
  
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
        <CompleteTask width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  