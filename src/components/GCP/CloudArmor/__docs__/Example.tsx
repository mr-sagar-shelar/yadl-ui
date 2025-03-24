import React, { FC } from "react";
  import CloudArmor from "../CloudArmor";
  
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
        <CloudArmor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  