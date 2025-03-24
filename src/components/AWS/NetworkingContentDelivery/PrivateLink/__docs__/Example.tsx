import React, { FC } from "react";
  import PrivateLink from "../PrivateLink";
  
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
        <PrivateLink width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  