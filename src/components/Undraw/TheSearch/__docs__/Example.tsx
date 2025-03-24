import React, { FC } from "react";
  import TheSearch from "../TheSearch";
  
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
        <TheSearch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  