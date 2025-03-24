import React, { FC } from "react";
  import ForSale from "../ForSale";
  
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
        <ForSale width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  