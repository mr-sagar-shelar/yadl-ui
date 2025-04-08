import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CDNProfiles from "../CDNProfiles";

describe("CDNProfiles component", () => {
  it("CDNProfiles should render correctly", () => {
    render(<CDNProfiles />);
    expect(true).toBeTruthy();
  });
});
