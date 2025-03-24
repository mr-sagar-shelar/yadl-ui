import React, { FC } from "react";
  import SelectedBox from "../SelectedBox";
  
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
        <SelectedBox width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  