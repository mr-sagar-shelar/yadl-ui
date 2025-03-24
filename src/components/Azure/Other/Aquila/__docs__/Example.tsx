import React, { FC } from "react";
  import Aquila from "../Aquila";
  
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
        <Aquila width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  