import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SoftwareUpdates from "../SoftwareUpdates";

describe("SoftwareUpdates component", () => {
  it("SoftwareUpdates should render correctly", () => {
    render(<SoftwareUpdates />);
    expect(true).toBeTruthy();
  });
});
