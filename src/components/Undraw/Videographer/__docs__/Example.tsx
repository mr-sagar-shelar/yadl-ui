import React, { FC } from "react";
  import Videographer from "../Videographer";
  
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
        <Videographer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  