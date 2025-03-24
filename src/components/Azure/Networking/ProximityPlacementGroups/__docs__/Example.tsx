import React, { FC } from "react";
  import ProximityPlacementGroups from "../ProximityPlacementGroups";
  
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
        <ProximityPlacementGroups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  