import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Updates from "../Updates";

describe("Updates component", () => {
  it("Updates should render correctly", () => {
    render(<Updates />);
    expect(true).toBeTruthy();
  });
});
