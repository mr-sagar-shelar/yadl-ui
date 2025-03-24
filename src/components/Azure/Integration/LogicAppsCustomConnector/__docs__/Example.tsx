import React, { FC } from "react";
  import LogicAppsCustomConnector from "../LogicAppsCustomConnector";
  
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
        <LogicAppsCustomConnector width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  