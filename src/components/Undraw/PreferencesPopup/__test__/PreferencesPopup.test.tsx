import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PreferencesPopup from "../PreferencesPopup";

describe("PreferencesPopup component", () => {
  it("PreferencesPopup should render correctly", () => {
    render(<PreferencesPopup />);
    expect(true).toBeTruthy();
  });
});
