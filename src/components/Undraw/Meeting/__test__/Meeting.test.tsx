import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Meeting from "../Meeting";

describe("Meeting component", () => {
  it("Meeting should render correctly", () => {
    render(<Meeting />);
    expect(true).toBeTruthy();
  });
});
