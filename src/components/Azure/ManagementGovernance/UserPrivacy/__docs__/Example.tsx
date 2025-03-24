import React, { FC } from "react";
  import UserPrivacy from "../UserPrivacy";
  
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
        <UserPrivacy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  