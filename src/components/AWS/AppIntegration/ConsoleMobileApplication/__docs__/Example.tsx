import React, { FC } from "react";
  import ConsoleMobileApplication from "../ConsoleMobileApplication";
  
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
        <ConsoleMobileApplication width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  