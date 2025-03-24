import React, { FC } from "react";
  import Image from "../Image";
  
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
        <Image width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  