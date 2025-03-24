import React, { FC } from "react";
  import OurNeighborhood from "../OurNeighborhood";
  
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
        <OurNeighborhood width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  