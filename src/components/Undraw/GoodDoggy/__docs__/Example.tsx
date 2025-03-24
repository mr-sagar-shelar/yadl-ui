import React, { FC } from "react";
  import GoodDoggy from "../GoodDoggy";
  
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
        <GoodDoggy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  