import React, { FC } from "react";
  import Resume from "../Resume";
  
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
        <Resume width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  