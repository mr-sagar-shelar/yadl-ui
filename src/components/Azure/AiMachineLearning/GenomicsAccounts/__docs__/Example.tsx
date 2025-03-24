import React, { FC } from "react";
  import GenomicsAccounts from "../GenomicsAccounts";
  
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
        <GenomicsAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  