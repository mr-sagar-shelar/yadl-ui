import React, { FC } from "react";
  import Messages from "../Messages";
  
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
        <Messages width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  