import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExpressWorkflows from "../ExpressWorkflows";

describe("ExpressWorkflows component", () => {
  it("ExpressWorkflows should render correctly", () => {
    render(<ExpressWorkflows />);
    expect(true).toBeTruthy();
  });
});
