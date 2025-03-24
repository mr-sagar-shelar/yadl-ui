import React, { FC } from "react";
  import PreferencesPopup from "../PreferencesPopup";
  
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
        <PreferencesPopup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  