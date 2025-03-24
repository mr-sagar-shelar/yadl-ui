import React, { FC } from "react";
  import GiftCard from "../GiftCard";
  
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
        <GiftCard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  