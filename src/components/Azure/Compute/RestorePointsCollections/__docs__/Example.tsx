import React, { FC } from "react";
  import RestorePointsCollections from "../RestorePointsCollections";
  
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
        <RestorePointsCollections width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  