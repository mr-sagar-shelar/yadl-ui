import React, { FC } from "react";
  import OnlineArt from "../OnlineArt";
  
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
        <OnlineArt width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  