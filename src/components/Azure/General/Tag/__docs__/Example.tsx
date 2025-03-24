import React, { FC } from "react";
  import Tag from "../Tag";
  
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
        <Tag width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  