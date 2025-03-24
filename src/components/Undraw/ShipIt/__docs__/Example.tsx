import React, { FC } from "react";
  import ShipIt from "../ShipIt";
  
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
        <ShipIt width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  