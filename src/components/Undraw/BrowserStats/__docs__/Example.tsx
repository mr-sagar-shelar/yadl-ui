import React, { FC } from "react";
  import BrowserStats from "../BrowserStats";
  
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
        <BrowserStats width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  