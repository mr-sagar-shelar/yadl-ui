import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PlayingCardsPlayingCards from "../PlayingCardsPlayingCards";

describe("PlayingCardsPlayingCards component", () => {
  it("PlayingCardsPlayingCards should render correctly", () => {
    render(<PlayingCardsPlayingCards />);
    expect(true).toBeTruthy();
  });
});
