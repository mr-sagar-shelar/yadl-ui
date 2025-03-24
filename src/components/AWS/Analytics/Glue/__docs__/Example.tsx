import React, { FC } from "react";
  import Glue from "../Glue";
  
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
        <Glue width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  