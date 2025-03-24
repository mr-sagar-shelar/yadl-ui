import React, { FC } from "react";
  import Collection from "../Collection";
  
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
        <Collection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  