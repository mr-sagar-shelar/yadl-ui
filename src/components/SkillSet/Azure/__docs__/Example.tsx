import React, { FC } from "react";
  import Azure from "../Azure";
  
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
        <Azure width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  