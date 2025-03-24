import React, { FC } from "react";
  import AddColor from "../AddColor";
  
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
        <AddColor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  