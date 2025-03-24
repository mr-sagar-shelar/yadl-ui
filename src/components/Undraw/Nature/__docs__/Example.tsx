import React, { FC } from "react";
  import Nature from "../Nature";
  
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
        <Nature width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  