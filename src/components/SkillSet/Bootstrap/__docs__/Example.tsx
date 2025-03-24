import React, { FC } from "react";
  import Bootstrap from "../Bootstrap";
  
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
        <Bootstrap width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  