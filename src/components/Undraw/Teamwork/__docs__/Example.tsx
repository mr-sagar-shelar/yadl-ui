import React, { FC } from "react";
  import Teamwork from "../Teamwork";
  
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
        <Teamwork width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  