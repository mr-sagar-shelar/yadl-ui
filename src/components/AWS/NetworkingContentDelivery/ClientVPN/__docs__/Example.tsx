import React, { FC } from "react";
  import ClientVPN from "../ClientVPN";
  
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
        <ClientVPN width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  