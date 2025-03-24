import React, { FC } from "react";
  import ShoppingApp from "../ShoppingApp";
  
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
        <ShoppingApp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  