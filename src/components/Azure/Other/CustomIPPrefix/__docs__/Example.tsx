import React, { FC } from "react";
  import CustomIPPrefix from "../CustomIPPrefix";
  
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
        <CustomIPPrefix width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  