import React, { FC } from "react";
  import QuittingTime from "../QuittingTime";
  
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
        <QuittingTime width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  