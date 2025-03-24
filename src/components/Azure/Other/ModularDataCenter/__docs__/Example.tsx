import React, { FC } from "react";
  import ModularDataCenter from "../ModularDataCenter";
  
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
        <ModularDataCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  