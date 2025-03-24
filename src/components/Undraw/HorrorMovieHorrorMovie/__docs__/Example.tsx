import React, { FC } from "react";
  import HorrorMovieHorrorMovie from "../HorrorMovieHorrorMovie";
  
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
        <HorrorMovieHorrorMovie width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  