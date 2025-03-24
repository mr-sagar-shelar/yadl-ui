import React, { FC } from "react";
  import Linux from "../Linux";
  
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
        <Linux width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  