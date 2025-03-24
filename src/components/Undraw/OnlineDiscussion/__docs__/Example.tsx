import React, { FC } from "react";
  import OnlineDiscussion from "../OnlineDiscussion";
  
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
        <OnlineDiscussion width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  