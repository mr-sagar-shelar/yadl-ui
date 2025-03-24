import React, { FC } from "react";
  import DataBox from "../DataBox";
  
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
        <DataBox width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  