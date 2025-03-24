import React, { FC } from "react";
  import Datashare from "../Datashare";
  
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
        <Datashare width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  