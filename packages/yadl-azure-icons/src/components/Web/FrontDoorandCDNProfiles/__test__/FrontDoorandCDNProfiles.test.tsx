import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FrontDoorandCDNProfiles from "../FrontDoorandCDNProfiles";

describe("FrontDoorandCDNProfiles component", () => {
  it("FrontDoorandCDNProfiles should render correctly", () => {
    render(<FrontDoorandCDNProfiles />);
    expect(true).toBeTruthy();
  });
});
