import React, { FC } from "react";
  import TrainingCertification from "../TrainingCertification";
  
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
        <TrainingCertification width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  