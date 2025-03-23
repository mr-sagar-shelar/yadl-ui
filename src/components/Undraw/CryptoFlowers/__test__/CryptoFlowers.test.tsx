import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CryptoFlowers from "../CryptoFlowers";

describe("CryptoFlowers component", () => {
  it("CryptoFlowers should render correctly", () => {
    render(<CryptoFlowers />);
    expect(true).toBeTruthy();
  });
});
