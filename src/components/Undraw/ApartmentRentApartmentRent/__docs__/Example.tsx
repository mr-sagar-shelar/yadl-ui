import React, { FC } from "react";
import ApartmentRentApartmentRent from "../ApartmentRentApartmentRent";

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
      <ApartmentRentApartmentRent width="500px" height="500px" />
    </div>
  );
};

export default Example;
