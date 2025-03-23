import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Statistics from "../Statistics";

describe("Statistics component", () => {
  it("Statistics should render correctly", () => {
    render(<Statistics />);
    expect(true).toBeTruthy();
  });
});
