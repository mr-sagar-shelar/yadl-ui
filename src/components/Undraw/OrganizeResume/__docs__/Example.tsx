import React, { FC } from "react";
  import OrganizeResume from "../OrganizeResume";
  
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
        <OrganizeResume width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  