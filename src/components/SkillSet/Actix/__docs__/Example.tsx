import React, { FC } from "react";
  import Actix from "../Actix";
  
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
        <Actix width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  