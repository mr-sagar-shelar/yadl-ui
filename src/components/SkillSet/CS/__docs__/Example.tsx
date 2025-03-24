import React, { FC } from "react";
  import CS from "../CS";
  
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
        <CS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  