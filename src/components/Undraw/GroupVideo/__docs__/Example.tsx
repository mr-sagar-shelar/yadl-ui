import React, { FC } from "react";
  import GroupVideo from "../GroupVideo";
  
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
        <GroupVideo width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  