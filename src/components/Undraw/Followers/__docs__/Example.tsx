import React, { FC } from "react";
  import Followers from "../Followers";
  
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
        <Followers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  