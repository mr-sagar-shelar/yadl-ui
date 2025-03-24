import React, { FC } from "react";
  import ArcPostgreSQL from "../ArcPostgreSQL";
  
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
        <ArcPostgreSQL width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  