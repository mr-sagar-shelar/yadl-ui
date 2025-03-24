import React, { FC } from "react";
  import OnlineWorld from "../OnlineWorld";
  
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
        <OnlineWorld width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  