import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Selecting from "../Selecting";

describe("Selecting component", () => {
  it("Selecting should render correctly", () => {
    render(<Selecting />);
    expect(true).toBeTruthy();
  });
});
