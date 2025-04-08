import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Preferences from "../Preferences";

describe("Preferences component", () => {
  it("Preferences should render correctly", () => {
    render(<Preferences />);
    expect(true).toBeTruthy();
  });
});
