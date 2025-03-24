import React, { FC } from "react";
  import Proton from "../Proton";
  
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
        <Proton width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  