import React, { FC } from "react";
  import OnlineAd from "../OnlineAd";
  
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
        <OnlineAd width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  