import React, { FC } from "react";
  import UserPreferences from "../UserPreferences";
  
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
        <UserPreferences width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  