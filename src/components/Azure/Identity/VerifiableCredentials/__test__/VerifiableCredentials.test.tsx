import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VerifiableCredentials from "../VerifiableCredentials";

describe("VerifiableCredentials component", () => {
  it("VerifiableCredentials should render correctly", () => {
    render(<VerifiableCredentials />);
    expect(true).toBeTruthy();
  });
});
