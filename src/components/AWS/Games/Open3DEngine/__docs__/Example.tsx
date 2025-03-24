import React, { FC } from "react";
  import Open3DEngine from "../Open3DEngine";
  
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
        <Open3DEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  