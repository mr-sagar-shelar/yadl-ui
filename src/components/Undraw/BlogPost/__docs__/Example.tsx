import React, { FC } from "react";
  import BlogPost from "../BlogPost";
  
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
        <BlogPost width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  