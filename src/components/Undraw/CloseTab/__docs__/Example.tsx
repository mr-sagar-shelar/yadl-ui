import React, { FC } from "react";
  import CloseTab from "../CloseTab";
  
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
        <CloseTab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  