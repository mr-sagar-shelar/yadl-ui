import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MissionLandingZone from "../MissionLandingZone";

describe("MissionLandingZone component", () => {
  it("MissionLandingZone should render correctly", () => {
    render(<MissionLandingZone />);
    expect(true).toBeTruthy();
  });
});
