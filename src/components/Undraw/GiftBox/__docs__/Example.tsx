import React, { FC } from "react";
  import GiftBox from "../GiftBox";
  
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
        <GiftBox width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  