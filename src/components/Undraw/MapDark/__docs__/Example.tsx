import React, { FC } from "react";
  import MapDark from "../MapDark";
  
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
        <MapDark width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  