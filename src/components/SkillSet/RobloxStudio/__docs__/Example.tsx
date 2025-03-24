import React, { FC } from "react";
  import RobloxStudio from "../RobloxStudio";
  
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
        <RobloxStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  