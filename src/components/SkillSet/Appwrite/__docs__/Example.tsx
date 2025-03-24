import React, { FC } from "react";
  import Appwrite from "../Appwrite";
  
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
        <Appwrite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  