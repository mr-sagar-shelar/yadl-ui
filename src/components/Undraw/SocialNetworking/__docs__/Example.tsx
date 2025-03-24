import React, { FC } from "react";
  import SocialNetworking from "../SocialNetworking";
  
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
        <SocialNetworking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  