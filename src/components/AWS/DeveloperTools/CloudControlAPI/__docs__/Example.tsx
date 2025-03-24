import React, { FC } from "react";
  import CloudControlAPI from "../CloudControlAPI";
  
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
        <CloudControlAPI width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  