import React, { FC } from "react";
  import Exams from "../Exams";
  
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
        <Exams width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  