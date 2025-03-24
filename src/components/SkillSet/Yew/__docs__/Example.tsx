import React, { FC } from "react";
  import Yew from "../Yew";
  
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
        <Yew width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  