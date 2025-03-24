import React, { FC } from "react";
  import RouteTables from "../RouteTables";
  
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
        <RouteTables width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  