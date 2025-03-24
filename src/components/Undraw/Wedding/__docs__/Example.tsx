import React, { FC } from "react";
  import Wedding from "../Wedding";
  
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
        <Wedding width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  