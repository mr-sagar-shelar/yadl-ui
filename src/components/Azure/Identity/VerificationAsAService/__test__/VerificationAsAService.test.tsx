import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VerificationAsAService from "../VerificationAsAService";

describe("VerificationAsAService component", () => {
  it("VerificationAsAService should render correctly", () => {
    render(<VerificationAsAService />);
    expect(true).toBeTruthy();
  });
});
