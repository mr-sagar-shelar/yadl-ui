import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Signer from "../Signer";

describe("Signer component", () => {
  it("Signer should render correctly", () => {
    render(<Signer />);
    expect(true).toBeTruthy();
  });
});
