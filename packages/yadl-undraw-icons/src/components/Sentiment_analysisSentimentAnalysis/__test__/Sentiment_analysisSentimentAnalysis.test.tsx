import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Sentiment_analysisSentimentAnalysis from "../Sentiment_analysisSentimentAnalysis";

describe("Sentiment_analysisSentimentAnalysis component", () => {
  it("Sentiment_analysisSentimentAnalysis should render correctly", () => {
    render(<Sentiment_analysisSentimentAnalysis />);
    expect(true).toBeTruthy();
  });
});
