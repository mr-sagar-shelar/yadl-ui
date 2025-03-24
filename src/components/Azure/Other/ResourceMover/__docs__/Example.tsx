import React, { FC } from "react";
  import ResourceMover from "../ResourceMover";
  
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
        <ResourceMover width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  