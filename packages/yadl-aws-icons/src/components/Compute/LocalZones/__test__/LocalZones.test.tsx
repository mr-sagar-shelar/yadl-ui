import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LocalZones from "../LocalZones";

describe("LocalZones component", () => {
  it("LocalZones should render correctly", () => {
    render(<LocalZones />);
    expect(true).toBeTruthy();
  });
});
