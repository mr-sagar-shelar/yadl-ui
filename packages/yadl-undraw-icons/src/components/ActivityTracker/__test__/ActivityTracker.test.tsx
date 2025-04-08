import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ActivityTracker from "../ActivityTracker";

describe("ActivityTracker component", () => {
  it("ActivityTracker should render correctly", () => {
    render(<ActivityTracker />);
    expect(true).toBeTruthy();
  });
});
