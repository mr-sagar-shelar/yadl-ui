import React, { FC } from "react";
  import FlyingDrone from "../FlyingDrone";
  
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
        <FlyingDrone width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  