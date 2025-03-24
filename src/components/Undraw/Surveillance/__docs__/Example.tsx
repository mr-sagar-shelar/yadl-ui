import React, { FC } from "react";
  import Surveillance from "../Surveillance";
  
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
        <Surveillance width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  