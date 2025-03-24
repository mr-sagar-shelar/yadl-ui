import React, { FC } from "react";
  import SocialInteraction from "../SocialInteraction";
  
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
        <SocialInteraction width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  