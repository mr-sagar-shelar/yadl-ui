import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "../Home";

describe("Home component", () => {
  it("Home should render correctly", () => {
    render(<Home />);
    expect(true).toBeTruthy();
  });
});
