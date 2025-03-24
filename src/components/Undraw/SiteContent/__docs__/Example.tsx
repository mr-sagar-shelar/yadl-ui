import React, { FC } from "react";
  import SiteContent from "../SiteContent";
  
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
        <SiteContent width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  