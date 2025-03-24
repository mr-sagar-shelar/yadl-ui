import React, { FC } from "react";
  import SocialSharing from "../SocialSharing";
  
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
        <SocialSharing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  