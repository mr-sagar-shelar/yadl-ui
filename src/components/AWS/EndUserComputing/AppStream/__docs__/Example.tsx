import React, { FC } from "react";
  import AppStream from "../AppStream";
  
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
        <AppStream width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  