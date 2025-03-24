import React, { FC } from "react";
  import StreamSuite from "../StreamSuite";
  
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
        <StreamSuite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  