import React, { FC } from "react";
  import Walking from "../Walking";
  
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
        <Walking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  