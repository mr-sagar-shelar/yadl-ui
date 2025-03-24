import React, { FC } from "react";
  import ArcSQLManagedInstance from "../ArcSQLManagedInstance";
  
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
        <ArcSQLManagedInstance width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  