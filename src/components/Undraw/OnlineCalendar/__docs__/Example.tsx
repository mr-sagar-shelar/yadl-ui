import React, { FC } from "react";
  import OnlineCalendar from "../OnlineCalendar";
  
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
        <OnlineCalendar width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  