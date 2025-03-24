import React, { FC } from "react";
  import PlayingCardsPlayingCards from "../PlayingCardsPlayingCards";
  
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
        <PlayingCardsPlayingCards width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  