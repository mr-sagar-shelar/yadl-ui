import React, { FC } from "react";
  import ApigeeApiPlatform from "../ApigeeApiPlatform";
  
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
        <ApigeeApiPlatform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  