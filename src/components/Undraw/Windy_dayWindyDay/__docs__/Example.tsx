import React, { FC } from "react";
  import Windy_dayWindyDay from "../Windy_dayWindyDay";
  
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
        <Windy_dayWindyDay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  