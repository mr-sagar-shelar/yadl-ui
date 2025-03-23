import React, { FC } from "react";
import Sentiment_analysisSentimentAnalysis from "../Sentiment_analysisSentimentAnalysis";

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
      <Sentiment_analysisSentimentAnalysis width="500px" height="500px" />
    </div>
  );
};

export default Example;
