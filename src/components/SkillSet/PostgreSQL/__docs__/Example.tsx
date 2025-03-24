import React, { FC } from "react";
  import PostgreSQL from "../PostgreSQL";
  
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
        <PostgreSQL width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  