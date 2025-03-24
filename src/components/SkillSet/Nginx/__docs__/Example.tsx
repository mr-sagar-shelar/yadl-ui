import React, { FC } from "react";
  import Nginx from "../Nginx";
  
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
        <Nginx width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  