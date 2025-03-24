import React, { FC } from "react";
  import AutomlTranslation from "../AutomlTranslation";
  
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
        <AutomlTranslation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  