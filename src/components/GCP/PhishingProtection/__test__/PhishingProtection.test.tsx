import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PhishingProtection from "../PhishingProtection";

describe("PhishingProtection component", () => {
  it("PhishingProtection should render correctly", () => {
    render(<PhishingProtection />);
    expect(true).toBeTruthy();
  });
});
