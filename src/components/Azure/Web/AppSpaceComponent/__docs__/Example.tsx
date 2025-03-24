import React, { FC } from "react";
  import AppSpaceComponent from "../AppSpaceComponent";
  
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
        <AppSpaceComponent width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  