import React, { FC } from "react";
  import PersonalGoals from "../PersonalGoals";
  
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
        <PersonalGoals width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  