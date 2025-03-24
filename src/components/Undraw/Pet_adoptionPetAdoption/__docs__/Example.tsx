import React, { FC } from "react";
  import Pet_adoptionPetAdoption from "../Pet_adoptionPetAdoption";
  
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
        <Pet_adoptionPetAdoption width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  