import React, { FC } from "react";
  import Datapol from "../Datapol";
  
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
        <Datapol width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  