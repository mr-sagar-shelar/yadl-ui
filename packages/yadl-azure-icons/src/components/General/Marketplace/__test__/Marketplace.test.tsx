import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Marketplace from "../Marketplace";

describe("Marketplace component", () => {
  it("Marketplace should render correctly", () => {
    render(<Marketplace />);
    expect(true).toBeTruthy();
  });
});
