import React, { FC } from "react";
  import DataInput from "../DataInput";
  
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
        <DataInput width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  