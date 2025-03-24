import React, { FC } from "react";
  import CollaborativeService from "../CollaborativeService";
  
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
        <CollaborativeService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  