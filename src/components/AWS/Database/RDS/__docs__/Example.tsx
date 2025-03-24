import React, { FC } from "react";
  import RDS from "../RDS";
  
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
        <RDS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  