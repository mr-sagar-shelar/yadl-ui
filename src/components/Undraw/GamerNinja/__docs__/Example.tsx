import React, { FC } from "react";
  import GamerNinja from "../GamerNinja";
  
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
        <GamerNinja width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  