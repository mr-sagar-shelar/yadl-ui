import React, { FC } from "react";
  import PersonalInfo from "../PersonalInfo";
  
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
        <PersonalInfo width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  