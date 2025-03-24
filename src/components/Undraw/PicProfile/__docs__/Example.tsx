import React, { FC } from "react";
  import PicProfile from "../PicProfile";
  
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
        <PicProfile width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  