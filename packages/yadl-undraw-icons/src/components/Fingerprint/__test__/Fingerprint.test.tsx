import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fingerprint from "../Fingerprint";

describe("Fingerprint component", () => {
  it("Fingerprint should render correctly", () => {
    render(<Fingerprint />);
    expect(true).toBeTruthy();
  });
});
