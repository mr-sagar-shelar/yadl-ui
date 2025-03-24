import React, { FC } from "react";
  import GithubActions from "../GithubActions";
  
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
        <GithubActions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  