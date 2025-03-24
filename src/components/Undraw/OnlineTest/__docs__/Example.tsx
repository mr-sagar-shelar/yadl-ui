import React, { FC } from "react";
  import OnlineTest from "../OnlineTest";
  
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
        <OnlineTest width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  