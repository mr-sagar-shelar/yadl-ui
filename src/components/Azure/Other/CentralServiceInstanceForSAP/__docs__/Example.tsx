import React, { FC } from "react";
  import CentralServiceInstanceForSAP from "../CentralServiceInstanceForSAP";
  
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
        <CentralServiceInstanceForSAP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  