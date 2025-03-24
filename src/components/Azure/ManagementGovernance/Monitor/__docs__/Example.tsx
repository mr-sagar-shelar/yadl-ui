import React, { FC } from "react";
  import Monitor from "../Monitor";
  
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
        <Monitor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  