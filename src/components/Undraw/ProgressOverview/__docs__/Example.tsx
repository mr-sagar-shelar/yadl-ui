import React, { FC } from "react";
  import ProgressOverview from "../ProgressOverview";
  
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
        <ProgressOverview width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  