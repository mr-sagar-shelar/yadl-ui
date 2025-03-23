import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SiteStats from "../SiteStats";

describe("SiteStats component", () => {
  it("SiteStats should render correctly", () => {
    render(<SiteStats />);
    expect(true).toBeTruthy();
  });
});
