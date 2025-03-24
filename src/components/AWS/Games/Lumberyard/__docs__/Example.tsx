import React, { FC } from "react";
  import Lumberyard from "../Lumberyard";
  
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
        <Lumberyard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  