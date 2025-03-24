import React, { FC } from "react";
  import Snowball from "../Snowball";
  
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
        <Snowball width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  