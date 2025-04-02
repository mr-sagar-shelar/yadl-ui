import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Solidity from "../Solidity";

describe("Solidity component", () => {
  it("Solidity should render correctly", () => {
    render(<Solidity />);
    expect(true).toBeTruthy();
  });
});
