import React, { FC } from "react";
  import HouseSearching from "../HouseSearching";
  
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
        <HouseSearching width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  