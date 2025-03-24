import React, { FC } from "react";
  import BinaryAuthorization from "../BinaryAuthorization";
  
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
        <BinaryAuthorization width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  