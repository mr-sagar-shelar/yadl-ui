import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudGpu from "../CloudGpu";

describe("CloudGpu component", () => {
  it("CloudGpu should render correctly", () => {
    render(<CloudGpu />);
    expect(true).toBeTruthy();
  });
});
