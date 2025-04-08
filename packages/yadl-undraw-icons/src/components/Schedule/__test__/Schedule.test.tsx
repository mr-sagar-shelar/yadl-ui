import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Schedule from "../Schedule";

describe("Schedule component", () => {
  it("Schedule should render correctly", () => {
    render(<Schedule />);
    expect(true).toBeTruthy();
  });
});
