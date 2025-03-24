import React, { FC } from "react";
  import AtHome from "../AtHome";
  
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
        <AtHome width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  