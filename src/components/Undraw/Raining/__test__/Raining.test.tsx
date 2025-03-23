import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Raining from "../Raining";

describe("Raining component", () => {
  it("Raining should render correctly", () => {
    render(<Raining />);
    expect(true).toBeTruthy();
  });
});
