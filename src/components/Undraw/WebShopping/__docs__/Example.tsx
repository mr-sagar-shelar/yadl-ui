import React, { FC } from "react";
  import WebShopping from "../WebShopping";
  
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
        <WebShopping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  