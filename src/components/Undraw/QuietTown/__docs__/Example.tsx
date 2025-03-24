import React, { FC } from "react";
  import QuietTown from "../QuietTown";
  
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
        <QuietTown width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  