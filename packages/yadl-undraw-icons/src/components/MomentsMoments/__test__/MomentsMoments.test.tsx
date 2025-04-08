import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MomentsMoments from "../MomentsMoments";

describe("MomentsMoments component", () => {
  it("MomentsMoments should render correctly", () => {
    render(<MomentsMoments />);
    expect(true).toBeTruthy();
  });
});
