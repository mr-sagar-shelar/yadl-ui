import React, { FC } from "react";
  import DuaLipaDuaLipa from "../DuaLipaDuaLipa";
  
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
        <DuaLipaDuaLipa width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  