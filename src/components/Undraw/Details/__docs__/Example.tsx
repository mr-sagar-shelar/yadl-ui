import React, { FC } from "react";
  import Details from "../Details";
  
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
        <Details width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  