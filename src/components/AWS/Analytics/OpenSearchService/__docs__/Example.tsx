import React, { FC } from "react";
  import OpenSearchService from "../OpenSearchService";
  
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
        <OpenSearchService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  