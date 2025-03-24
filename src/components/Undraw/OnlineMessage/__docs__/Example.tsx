import React, { FC } from "react";
  import OnlineMessage from "../OnlineMessage";
  
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
        <OnlineMessage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  