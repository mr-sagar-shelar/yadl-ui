import React, { FC } from "react";
  import Messenger from "../Messenger";
  
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
        <Messenger width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  