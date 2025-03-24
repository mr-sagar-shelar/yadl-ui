import React, { FC } from "react";
  import CommunityImages from "../CommunityImages";
  
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
        <CommunityImages width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  