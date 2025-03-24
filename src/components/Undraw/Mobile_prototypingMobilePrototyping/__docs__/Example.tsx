import React, { FC } from "react";
  import Mobile_prototypingMobilePrototyping from "../Mobile_prototypingMobilePrototyping";
  
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
        <Mobile_prototypingMobilePrototyping width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  