import React, { FC } from "react";
  import JQuery from "../JQuery";
  
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
        <JQuery width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  