import React, { FC } from "react";
  import EiffelTower from "../EiffelTower";
  
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
        <EiffelTower width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  