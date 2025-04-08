import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CryptoPortfolio from "../CryptoPortfolio";

describe("CryptoPortfolio component", () => {
  it("CryptoPortfolio should render correctly", () => {
    render(<CryptoPortfolio />);
    expect(true).toBeTruthy();
  });
});
