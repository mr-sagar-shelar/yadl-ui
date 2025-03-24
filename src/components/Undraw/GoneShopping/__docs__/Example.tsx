import React, { FC } from "react";
  import GoneShopping from "../GoneShopping";
  
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
        <GoneShopping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  