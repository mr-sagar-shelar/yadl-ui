import React, { FC } from "react";
  import CloudForMarketing from "../CloudForMarketing";
  
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
        <CloudForMarketing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  