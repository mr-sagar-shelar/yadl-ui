import React, { FC } from "react";
  import Gifts from "../Gifts";
  
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
        <Gifts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  