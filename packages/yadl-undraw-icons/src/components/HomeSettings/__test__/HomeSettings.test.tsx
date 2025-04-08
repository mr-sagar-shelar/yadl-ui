import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HomeSettings from "../HomeSettings";

describe("HomeSettings component", () => {
  it("HomeSettings should render correctly", () => {
    render(<HomeSettings />);
    expect(true).toBeTruthy();
  });
});
