import React, { FC } from "react";
  import DoctorDoctor from "../DoctorDoctor";
  
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
        <DoctorDoctor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  