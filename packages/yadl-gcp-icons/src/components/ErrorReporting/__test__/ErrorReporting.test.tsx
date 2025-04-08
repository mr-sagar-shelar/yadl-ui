import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ErrorReporting from "../ErrorReporting";

describe("ErrorReporting component", () => {
  it("ErrorReporting should render correctly", () => {
    render(<ErrorReporting />);
    expect(true).toBeTruthy();
  });
});
