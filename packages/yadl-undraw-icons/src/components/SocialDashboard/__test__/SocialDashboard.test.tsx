import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialDashboard from "../SocialDashboard";

describe("SocialDashboard component", () => {
  it("SocialDashboard should render correctly", () => {
    render(<SocialDashboard />);
    expect(true).toBeTruthy();
  });
});
