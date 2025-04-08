import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudHealthcareApi from "../CloudHealthcareApi";

describe("CloudHealthcareApi component", () => {
  it("CloudHealthcareApi should render correctly", () => {
    render(<CloudHealthcareApi />);
    expect(true).toBeTruthy();
  });
});
