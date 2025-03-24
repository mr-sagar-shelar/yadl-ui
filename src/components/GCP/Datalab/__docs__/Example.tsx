import React, { FC } from "react";
  import Datalab from "../Datalab";
  
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
        <Datalab width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  