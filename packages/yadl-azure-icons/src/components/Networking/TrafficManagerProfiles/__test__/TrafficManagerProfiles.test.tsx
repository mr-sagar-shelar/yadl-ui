import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TrafficManagerProfiles from "../TrafficManagerProfiles";

describe("TrafficManagerProfiles component", () => {
  it("TrafficManagerProfiles should render correctly", () => {
    render(<TrafficManagerProfiles />);
    expect(true).toBeTruthy();
  });
});
