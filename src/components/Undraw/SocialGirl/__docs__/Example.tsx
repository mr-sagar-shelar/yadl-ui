import React, { FC } from "react";
  import SocialGirl from "../SocialGirl";
  
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
        <SocialGirl width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  