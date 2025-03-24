import React, { FC } from "react";
  import PersonalWebsite from "../PersonalWebsite";
  
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
        <PersonalWebsite width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  