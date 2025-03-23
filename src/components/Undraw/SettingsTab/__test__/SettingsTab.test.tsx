import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SettingsTab from "../SettingsTab";

describe("SettingsTab component", () => {
  it("SettingsTab should render correctly", () => {
    render(<SettingsTab />);
    expect(true).toBeTruthy();
  });
});
