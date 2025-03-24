import React, { FC } from "react";
  import PersonalTraining from "../PersonalTraining";
  
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
        <PersonalTraining width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  