import React, { FC } from "react";
  import SSHKeys from "../SSHKeys";
  
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
        <SSHKeys width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  