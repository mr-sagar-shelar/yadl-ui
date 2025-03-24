import React, { FC } from "react";
  import ImportExportJobs from "../ImportExportJobs";
  
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
        <ImportExportJobs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  