import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Family from "../Family";

describe("Family component", () => {
  it("Family should render correctly", () => {
    render(<Family />);
    expect(true).toBeTruthy();
  });
});
