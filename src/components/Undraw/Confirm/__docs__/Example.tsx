import React, { FC } from "react";
  import Confirm from "../Confirm";
  
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
        <Confirm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  