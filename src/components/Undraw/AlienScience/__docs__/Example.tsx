import React, { FC } from "react";
  import AlienScience from "../AlienScience";
  
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
        <AlienScience width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  