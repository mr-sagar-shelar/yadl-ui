import React, { FC } from "react";
  import FestivitiesFestivities from "../FestivitiesFestivities";
  
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
        <FestivitiesFestivities width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  