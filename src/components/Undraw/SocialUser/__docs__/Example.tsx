import React, { FC } from "react";
  import SocialUser from "../SocialUser";
  
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
        <SocialUser width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  