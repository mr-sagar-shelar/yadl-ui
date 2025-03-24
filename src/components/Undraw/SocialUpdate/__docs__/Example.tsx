import React, { FC } from "react";
  import SocialUpdate from "../SocialUpdate";
  
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
        <SocialUpdate width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  