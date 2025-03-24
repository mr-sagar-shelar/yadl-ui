import React, { FC } from "react";
  import JapanJapan from "../JapanJapan";
  
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
        <JapanJapan width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  