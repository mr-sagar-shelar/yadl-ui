import React, { FC } from "react";
  import UserSubscriptions from "../UserSubscriptions";
  
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
        <UserSubscriptions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  