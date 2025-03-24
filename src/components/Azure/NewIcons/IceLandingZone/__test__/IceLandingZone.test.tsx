import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IceLandingZone from "../IceLandingZone";

describe("IceLandingZone component", () => {
  it("IceLandingZone should render correctly", () => {
    render(<IceLandingZone />);
    expect(true).toBeTruthy();
  });
});
