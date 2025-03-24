import React, { FC } from "react";
  import WorkLink from "../WorkLink";
  
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
        <WorkLink width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  