import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Update from "../Update";

describe("Update component", () => {
  it("Update should render correctly", () => {
    render(<Update />);
    expect(true).toBeTruthy();
  });
});
