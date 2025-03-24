import React, { FC } from "react";
  import DataCollectionRules from "../DataCollectionRules";
  
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
        <DataCollectionRules width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  