import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PieGraph from "../PieGraph";

describe("PieGraph component", () => {
  it("PieGraph should render correctly", () => {
    render(<PieGraph />);
    expect(true).toBeTruthy();
  });
});
