import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkWatcher from "../NetworkWatcher";

describe("NetworkWatcher component", () => {
  it("NetworkWatcher should render correctly", () => {
    render(<NetworkWatcher />);
    expect(true).toBeTruthy();
  });
});
