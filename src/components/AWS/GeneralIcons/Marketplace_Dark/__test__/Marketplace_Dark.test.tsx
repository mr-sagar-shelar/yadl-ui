import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Marketplace_Dark from "../Marketplace_Dark";

describe("Marketplace_Dark component", () => {
  it("Marketplace_Dark should render correctly", () => {
    render(<Marketplace_Dark />);
    expect(true).toBeTruthy();
  });
});
