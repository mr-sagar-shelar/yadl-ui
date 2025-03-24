import React, { FC } from "react";
  import OpenedTabs from "../OpenedTabs";
  
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
        <OpenedTabs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  