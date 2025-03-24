import React, { FC } from "react";
  import MobileInbox from "../MobileInbox";
  
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
        <MobileInbox width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  