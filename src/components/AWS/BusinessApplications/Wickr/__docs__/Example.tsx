import React, { FC } from "react";
  import Wickr from "../Wickr";
  
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
        <Wickr width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  