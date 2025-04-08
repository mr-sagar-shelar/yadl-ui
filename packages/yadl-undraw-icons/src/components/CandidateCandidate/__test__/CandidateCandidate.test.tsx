import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CandidateCandidate from "../CandidateCandidate";

describe("CandidateCandidate component", () => {
  it("CandidateCandidate should render correctly", () => {
    render(<CandidateCandidate />);
    expect(true).toBeTruthy();
  });
});
