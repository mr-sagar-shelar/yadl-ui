import React, { FC } from "react";
  import WorkFromAnywhere from "../WorkFromAnywhere";
  
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
        <WorkFromAnywhere width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  