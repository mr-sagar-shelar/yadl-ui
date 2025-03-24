import React, { FC } from "react";
  import Notion from "../Notion";
  
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
        <Notion width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  