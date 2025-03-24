import React, { FC } from "react";
  import ProfileData from "../ProfileData";
  
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
        <ProfileData width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  