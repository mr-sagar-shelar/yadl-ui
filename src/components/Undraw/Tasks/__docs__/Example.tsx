import React, { FC } from "react";
  import Tasks from "../Tasks";
  
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
        <Tasks width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  