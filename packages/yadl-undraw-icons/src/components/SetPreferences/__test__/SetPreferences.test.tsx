import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SetPreferences from "../SetPreferences";

describe("SetPreferences component", () => {
  it("SetPreferences should render correctly", () => {
    render(<SetPreferences />);
    expect(true).toBeTruthy();
  });
});
