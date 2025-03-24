import React, { FC } from "react";
  import UnexpectedFriendsUnexpectedFriends from "../UnexpectedFriendsUnexpectedFriends";
  
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
        <UnexpectedFriendsUnexpectedFriends width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  