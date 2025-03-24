import React, { FC } from "react";
  import Browsing from "../Browsing";
  
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
        <Browsing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  