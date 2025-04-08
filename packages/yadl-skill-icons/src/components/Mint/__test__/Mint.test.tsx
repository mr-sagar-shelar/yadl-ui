import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mint from "../Mint";

describe("Mint component", () => {
  it("Mint should render correctly", () => {
    render(<Mint />);
    expect(true).toBeTruthy();
  });
});
