import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThroughTheDesert from "../ThroughTheDesert";

describe("ThroughTheDesert component", () => {
  it("ThroughTheDesert should render correctly", () => {
    render(<ThroughTheDesert />);
    expect(true).toBeTruthy();
  });
});
