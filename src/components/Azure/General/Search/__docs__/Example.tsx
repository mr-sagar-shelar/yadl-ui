import React, { FC } from "react";
  import Search from "../Search";
  
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
        <Search width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  