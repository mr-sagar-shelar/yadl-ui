import React, { FC } from "react";
  import EntraDomainServices from "../EntraDomainServices";
  
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
        <EntraDomainServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  