import React, { FC } from "react";
  import Backup from "../Backup";
  
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
        <Backup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  