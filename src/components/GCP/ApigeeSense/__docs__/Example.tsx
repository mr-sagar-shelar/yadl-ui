import React, { FC } from "react";
  import ApigeeSense from "../ApigeeSense";
  
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
        <ApigeeSense width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  