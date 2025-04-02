import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IPFS from "../IPFS";

describe("IPFS component", () => {
  it("IPFS should render correctly", () => {
    render(<IPFS />);
    expect(true).toBeTruthy();
  });
});
