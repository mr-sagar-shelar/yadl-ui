import React, { FC } from "react";
  import AzureAPIforFHIR from "../AzureAPIforFHIR";
  
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
        <AzureAPIforFHIR width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  