import React, { FC } from "react";
  import MaleAvatar from "../MaleAvatar";
  
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
        <MaleAvatar width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  