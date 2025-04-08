import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Art_thinkingArtThinking from "../Art_thinkingArtThinking";

describe("Art_thinkingArtThinking component", () => {
  it("Art_thinkingArtThinking should render correctly", () => {
    render(<Art_thinkingArtThinking />);
    expect(true).toBeTruthy();
  });
});
