import React, { FC } from "react";
  import Respond from "../Respond";
  
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
        <Respond width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  