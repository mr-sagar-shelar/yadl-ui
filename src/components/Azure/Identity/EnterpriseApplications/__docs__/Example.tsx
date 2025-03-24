import React, { FC } from "react";
  import EnterpriseApplications from "../EnterpriseApplications";
  
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
        <EnterpriseApplications width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  