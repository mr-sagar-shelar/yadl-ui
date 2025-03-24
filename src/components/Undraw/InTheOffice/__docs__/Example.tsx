import React, { FC } from "react";
  import InTheOffice from "../InTheOffice";
  
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
        <InTheOffice width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  