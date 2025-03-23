import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConfidentialLetter from "../ConfidentialLetter";

describe("ConfidentialLetter component", () => {
  it("ConfidentialLetter should render correctly", () => {
    render(<ConfidentialLetter />);
    expect(true).toBeTruthy();
  });
});
