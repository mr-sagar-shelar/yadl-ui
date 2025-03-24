import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Controls from "../Controls";

describe("Controls component", () => {
  it("Controls should render correctly", () => {
    render(<Controls />);
    expect(true).toBeTruthy();
  });
});
