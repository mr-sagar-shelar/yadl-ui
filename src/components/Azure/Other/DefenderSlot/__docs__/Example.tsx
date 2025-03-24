import React, { FC } from "react";
  import DefenderSlot from "../DefenderSlot";
  
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
        <DefenderSlot width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  