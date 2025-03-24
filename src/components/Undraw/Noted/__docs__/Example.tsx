import React, { FC } from "react";
  import Noted from "../Noted";
  
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
        <Noted width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  