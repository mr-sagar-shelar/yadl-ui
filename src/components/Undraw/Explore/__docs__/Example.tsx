import React, { FC } from "react";
  import Explore from "../Explore";
  
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
        <Explore width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  