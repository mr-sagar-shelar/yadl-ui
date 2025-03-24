import React, { FC } from "react";
  import Referral from "../Referral";
  
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
        <Referral width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  