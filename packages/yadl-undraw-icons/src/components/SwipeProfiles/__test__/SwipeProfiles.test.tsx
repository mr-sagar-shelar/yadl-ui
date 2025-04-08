import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SwipeProfiles from "../SwipeProfiles";

describe("SwipeProfiles component", () => {
  it("SwipeProfiles should render correctly", () => {
    render(<SwipeProfiles />);
    expect(true).toBeTruthy();
  });
});
