import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wallet from "../Wallet";

describe("Wallet component", () => {
  it("Wallet should render correctly", () => {
    render(<Wallet />);
    expect(true).toBeTruthy();
  });
});
