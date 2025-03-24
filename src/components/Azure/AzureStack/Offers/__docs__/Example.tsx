import React, { FC } from "react";
  import Offers from "../Offers";
  
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
        <Offers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  