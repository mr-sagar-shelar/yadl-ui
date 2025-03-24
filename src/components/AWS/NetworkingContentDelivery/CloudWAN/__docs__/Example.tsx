import React, { FC } from "react";
  import CloudWAN from "../CloudWAN";
  
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
        <CloudWAN width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  