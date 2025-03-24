import React, { FC } from "react";
  import Snowmobile from "../Snowmobile";
  
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
        <Snowmobile width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  