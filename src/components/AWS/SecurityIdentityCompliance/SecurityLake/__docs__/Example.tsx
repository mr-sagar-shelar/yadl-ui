import React, { FC } from "react";
  import SecurityLake from "../SecurityLake";
  
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
        <SecurityLake width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  