import React, { FC } from "react";
  import OnlineFriends from "../OnlineFriends";
  
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
        <OnlineFriends width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  