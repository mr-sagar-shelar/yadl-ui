import React, { FC } from "react";
  import ArcSQLServer from "../ArcSQLServer";
  
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
        <ArcSQLServer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  