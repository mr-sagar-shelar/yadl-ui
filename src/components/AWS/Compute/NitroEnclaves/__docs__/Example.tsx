import React, { FC } from "react";
  import NitroEnclaves from "../NitroEnclaves";
  
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
        <NitroEnclaves width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  