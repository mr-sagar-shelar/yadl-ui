import React, { FC } from "react";
  import Adonis from "../Adonis";
  
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
        <Adonis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  