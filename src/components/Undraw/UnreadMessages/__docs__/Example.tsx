import React, { FC } from "react";
  import UnreadMessages from "../UnreadMessages";
  
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
        <UnreadMessages width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  