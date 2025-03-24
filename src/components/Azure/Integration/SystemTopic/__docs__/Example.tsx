import React, { FC } from "react";
  import SystemTopic from "../SystemTopic";
  
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
        <SystemTopic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  