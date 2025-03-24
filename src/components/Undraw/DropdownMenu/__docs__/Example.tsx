import React, { FC } from "react";
  import DropdownMenu from "../DropdownMenu";
  
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
        <DropdownMenu width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  