import React, { FC } from "react";
  import ThinkboxFrost from "../ThinkboxFrost";
  
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
        <ThinkboxFrost width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  