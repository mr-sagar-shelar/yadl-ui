import React, { FC } from "react";
  import WebSlots from "../WebSlots";
  
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
        <WebSlots width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  