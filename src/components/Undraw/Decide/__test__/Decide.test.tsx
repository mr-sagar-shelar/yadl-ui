import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Decide from "../Decide";

describe("Decide component", () => {
  it("Decide should render correctly", () => {
    render(<Decide />);
    expect(true).toBeTruthy();
  });
});
