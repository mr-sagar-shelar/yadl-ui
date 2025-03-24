import React, { FC } from "react";
  import ReservedInstanceReporting from "../ReservedInstanceReporting";
  
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
        <ReservedInstanceReporting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  