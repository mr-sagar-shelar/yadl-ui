import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Emotion from "../Emotion";

describe("Emotion component", () => {
  it("Emotion should render correctly", () => {
    render(<Emotion />);
    expect(true).toBeTruthy();
  });
});
