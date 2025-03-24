import React, { FC } from "react";
  import HelpfulSign from "../HelpfulSign";
  
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
        <HelpfulSign width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  