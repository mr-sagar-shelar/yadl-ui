import React, { FC } from "react";
  import GroupSelfie from "../GroupSelfie";
  
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
        <GroupSelfie width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  