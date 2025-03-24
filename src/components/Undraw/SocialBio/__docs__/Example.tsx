import React, { FC } from "react";
  import SocialBio from "../SocialBio";
  
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
        <SocialBio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  