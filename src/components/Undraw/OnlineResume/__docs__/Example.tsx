import React, { FC } from "react";
  import OnlineResume from "../OnlineResume";
  
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
        <OnlineResume width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  