import React, { FC } from "react";
  import AboutUsPage from "../AboutUsPage";
  
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
        <AboutUsPage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  