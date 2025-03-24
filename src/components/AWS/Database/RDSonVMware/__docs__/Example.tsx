import React, { FC } from "react";
  import RDSonVMware from "../RDSonVMware";
  
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
        <RDSonVMware width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  