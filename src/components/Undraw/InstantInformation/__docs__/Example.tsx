import React, { FC } from "react";
  import InstantInformation from "../InstantInformation";
  
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
        <InstantInformation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  