import React, { FC } from "react";
  import DatabaseInstanceForSAP from "../DatabaseInstanceForSAP";
  
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
        <DatabaseInstanceForSAP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  