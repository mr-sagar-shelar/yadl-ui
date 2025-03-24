import React, { FC } from "react";
  import BodyText from "../BodyText";
  
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
        <BodyText width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  