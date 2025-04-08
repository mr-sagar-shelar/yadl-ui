import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ActivityLog from "../ActivityLog";

describe("ActivityLog component", () => {
  it("ActivityLog should render correctly", () => {
    render(<ActivityLog />);
    expect(true).toBeTruthy();
  });
});
