import React, { FC } from "react";
  import Htmx from "../Htmx";
  
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
        <Htmx width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  