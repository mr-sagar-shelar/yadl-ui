import React, { FC } from "react";
  import WorkTime from "../WorkTime";
  
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
        <WorkTime width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  