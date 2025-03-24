import React, { FC } from "react";
  import MonthlyUsers from "../MonthlyUsers";
  
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
        <MonthlyUsers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  