import React, { FC } from "react";
  import Testimonials from "../Testimonials";
  
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
        <Testimonials width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  