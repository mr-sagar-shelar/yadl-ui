import React, { FC } from "react";
  import Awesome from "../Awesome";
  
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
        <Awesome width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  