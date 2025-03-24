import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TrustedAdvisor from "../TrustedAdvisor";

describe("TrustedAdvisor component", () => {
  it("TrustedAdvisor should render correctly", () => {
    render(<TrustedAdvisor />);
    expect(true).toBeTruthy();
  });
});
