import React, { FC } from "react";
  import WindowShopping from "../WindowShopping";
  
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
        <WindowShopping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  