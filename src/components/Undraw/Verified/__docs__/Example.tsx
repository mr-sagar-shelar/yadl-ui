import React, { FC } from "react";
  import Verified from "../Verified";
  
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
        <Verified width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  