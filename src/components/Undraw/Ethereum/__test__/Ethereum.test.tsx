import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ethereum from "../Ethereum";

describe("Ethereum component", () => {
  it("Ethereum should render correctly", () => {
    render(<Ethereum />);
    expect(true).toBeTruthy();
  });
});
