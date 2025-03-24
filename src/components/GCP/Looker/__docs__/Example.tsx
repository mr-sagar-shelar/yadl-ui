import React, { FC } from "react";
  import Looker from "../Looker";
  
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
        <Looker width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  