import React, { FC } from "react";
  import OnlinePage from "../OnlinePage";
  
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
        <OnlinePage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  