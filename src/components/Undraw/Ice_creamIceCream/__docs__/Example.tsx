import React, { FC } from "react";
  import Ice_creamIceCream from "../Ice_creamIceCream";
  
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
        <Ice_creamIceCream width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  