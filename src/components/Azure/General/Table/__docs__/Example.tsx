import React, { FC } from "react";
  import Table from "../Table";
  
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
        <Table width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  