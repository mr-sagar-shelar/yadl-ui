import React, { FC } from "react";
  import Town from "../Town";
  
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
        <Town width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  