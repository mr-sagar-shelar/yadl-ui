import React, { FC } from "react";
  import PersonalInformation from "../PersonalInformation";
  
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
        <PersonalInformation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  