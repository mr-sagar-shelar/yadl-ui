import React, { FC } from "react";
  import UsersPerMinute from "../UsersPerMinute";
  
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
        <UsersPerMinute width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  