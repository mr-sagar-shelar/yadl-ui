import React, { FC } from "react";
  import ModernProfessional from "../ModernProfessional";
  
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
        <ModernProfessional width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  