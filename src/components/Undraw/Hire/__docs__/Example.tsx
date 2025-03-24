import React, { FC } from "react";
  import Hire from "../Hire";
  
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
        <Hire width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  