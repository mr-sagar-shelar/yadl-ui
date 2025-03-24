import React, { FC } from "react";
  import SelectedOptions from "../SelectedOptions";
  
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
        <SelectedOptions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  