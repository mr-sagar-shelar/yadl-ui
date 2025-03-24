import React, { FC } from "react";
  import ProfessionalWomanAvatar from "../ProfessionalWomanAvatar";
  
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
        <ProfessionalWomanAvatar width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  