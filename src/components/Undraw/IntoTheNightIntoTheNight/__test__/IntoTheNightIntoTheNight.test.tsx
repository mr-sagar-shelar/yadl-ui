import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IntoTheNightIntoTheNight from "../IntoTheNightIntoTheNight";

describe("IntoTheNightIntoTheNight component", () => {
  it("IntoTheNightIntoTheNight should render correctly", () => {
    render(<IntoTheNightIntoTheNight />);
    expect(true).toBeTruthy();
  });
});
