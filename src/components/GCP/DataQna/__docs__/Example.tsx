import React, { FC } from "react";
  import DataQna from "../DataQna";
  
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
        <DataQna width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  