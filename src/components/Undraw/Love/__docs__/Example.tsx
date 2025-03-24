import React, { FC } from "react";
  import Love from "../Love";
  
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
        <Love width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  