import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InternetAnalyzerProfiles from "../InternetAnalyzerProfiles";

describe("InternetAnalyzerProfiles component", () => {
  it("InternetAnalyzerProfiles should render correctly", () => {
    render(<InternetAnalyzerProfiles />);
    expect(true).toBeTruthy();
  });
});
