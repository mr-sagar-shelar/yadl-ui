import React, { FC } from "react";
  import Account from "../Account";
  
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
        <Account width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  