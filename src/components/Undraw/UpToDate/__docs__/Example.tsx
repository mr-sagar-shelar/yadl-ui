import React, { FC } from "react";
  import UpToDate from "../UpToDate";
  
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
        <UpToDate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  