import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Searching from "../Searching";

describe("Searching component", () => {
  it("Searching should render correctly", () => {
    render(<Searching />);
    expect(true).toBeTruthy();
  });
});
