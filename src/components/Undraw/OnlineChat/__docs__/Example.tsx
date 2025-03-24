import React, { FC } from "react";
  import OnlineChat from "../OnlineChat";
  
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
        <OnlineChat width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  