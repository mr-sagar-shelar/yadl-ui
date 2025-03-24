import React, { FC } from "react";
  import ContactCenterAi from "../ContactCenterAi";
  
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
        <ContactCenterAi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  