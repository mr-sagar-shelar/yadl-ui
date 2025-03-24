import React, { FC } from "react";
  import OnlineBanking from "../OnlineBanking";
  
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
        <OnlineBanking width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  