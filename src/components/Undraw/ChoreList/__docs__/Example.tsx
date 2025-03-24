import React, { FC } from "react";
  import ChoreList from "../ChoreList";
  
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
        <ChoreList width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  