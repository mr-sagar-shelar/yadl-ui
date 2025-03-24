import React, { FC } from "react";
  import Ceres from "../Ceres";
  
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
        <Ceres width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  