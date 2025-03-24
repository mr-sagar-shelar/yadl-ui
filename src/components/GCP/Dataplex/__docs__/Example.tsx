import React, { FC } from "react";
  import Dataplex from "../Dataplex";
  
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
        <Dataplex width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  