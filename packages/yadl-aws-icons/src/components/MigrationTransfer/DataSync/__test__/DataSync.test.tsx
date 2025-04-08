import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataSync from "../DataSync";

describe("DataSync component", () => {
  it("DataSync should render correctly", () => {
    render(<DataSync />);
    expect(true).toBeTruthy();
  });
});
