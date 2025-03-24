import React, { FC } from "react";
  import Fitness_statsFitnessStats from "../Fitness_statsFitnessStats";
  
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
        <Fitness_statsFitnessStats width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  