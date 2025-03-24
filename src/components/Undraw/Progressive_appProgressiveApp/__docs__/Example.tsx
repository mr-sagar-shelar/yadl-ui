import React, { FC } from "react";
  import Progressive_appProgressiveApp from "../Progressive_appProgressiveApp";
  
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
        <Progressive_appProgressiveApp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  