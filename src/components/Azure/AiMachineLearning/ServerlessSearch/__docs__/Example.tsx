import React, { FC } from "react";
  import ServerlessSearch from "../ServerlessSearch";
  
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
        <ServerlessSearch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  