import React, { FC } from "react";
  import CapacityReservationGroups from "../CapacityReservationGroups";
  
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
        <CapacityReservationGroups width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  