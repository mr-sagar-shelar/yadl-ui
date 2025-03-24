import React, { FC } from "react";
  import Users from "../Users";
  
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
        <Users width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  