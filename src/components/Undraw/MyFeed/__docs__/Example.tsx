import React, { FC } from "react";
  import MyFeed from "../MyFeed";
  
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
        <MyFeed width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  