import React, { FC } from "react";
  import FinanceGuyAvatar from "../FinanceGuyAvatar";
  
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
        <FinanceGuyAvatar width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  