import React, { FC } from "react";
  import MyCloud from "../MyCloud";
  
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
        <MyCloud width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  