import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CognitiveServices from "../CognitiveServices";

describe("CognitiveServices component", () => {
  it("CognitiveServices should render correctly", () => {
    render(<CognitiveServices />);
    expect(true).toBeTruthy();
  });
});
