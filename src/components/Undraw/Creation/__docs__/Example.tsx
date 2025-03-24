import React, { FC } from "react";
  import Creation from "../Creation";
  
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
        <Creation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  