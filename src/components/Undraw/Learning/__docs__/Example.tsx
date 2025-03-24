import React, { FC } from "react";
  import Learning from "../Learning";
  
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
        <Learning width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  