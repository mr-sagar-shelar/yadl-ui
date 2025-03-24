import React, { FC } from "react";
  import OnlineParty from "../OnlineParty";
  
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
        <OnlineParty width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  