import React, { FC } from "react";
  import GoogleKubernetesEngine from "../GoogleKubernetesEngine";
  
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
        <GoogleKubernetesEngine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  