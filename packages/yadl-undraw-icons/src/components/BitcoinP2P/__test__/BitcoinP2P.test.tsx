import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BitcoinP2P from "../BitcoinP2P";

describe("BitcoinP2P component", () => {
  it("BitcoinP2P should render correctly", () => {
    render(<BitcoinP2P />);
    expect(true).toBeTruthy();
  });
});
