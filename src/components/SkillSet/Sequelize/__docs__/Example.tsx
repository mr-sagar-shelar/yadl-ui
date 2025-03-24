import React, { FC } from "react";
  import Sequelize from "../Sequelize";
  
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
        <Sequelize width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  