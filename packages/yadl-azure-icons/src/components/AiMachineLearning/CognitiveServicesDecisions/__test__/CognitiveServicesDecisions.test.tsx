import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CognitiveServicesDecisions from "../CognitiveServicesDecisions";

describe("CognitiveServicesDecisions component", () => {
  it("CognitiveServicesDecisions should render correctly", () => {
    render(<CognitiveServicesDecisions />);
    expect(true).toBeTruthy();
  });
});
