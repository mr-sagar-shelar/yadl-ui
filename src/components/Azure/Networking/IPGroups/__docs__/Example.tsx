import React, { FC } from "react";
  import IPGroups from "../IPGroups";
  
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
        <IPGroups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  