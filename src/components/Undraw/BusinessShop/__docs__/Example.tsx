import React, { FC } from "react";
  import BusinessShop from "../BusinessShop";
  
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
        <BusinessShop width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  