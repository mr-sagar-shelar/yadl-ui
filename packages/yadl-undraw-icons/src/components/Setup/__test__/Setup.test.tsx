import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Setup from "../Setup";

describe("Setup component", () => {
  it("Setup should render correctly", () => {
    render(<Setup />);
    expect(true).toBeTruthy();
  });
});
