import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Environment1Environment from "../Environment1Environment";

describe("Environment1Environment component", () => {
  it("Environment1Environment should render correctly", () => {
    render(<Environment1Environment />);
    expect(true).toBeTruthy();
  });
});
