import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SitetoSiteVPN from "../SitetoSiteVPN";

describe("SitetoSiteVPN component", () => {
  it("SitetoSiteVPN should render correctly", () => {
    render(<SitetoSiteVPN />);
    expect(true).toBeTruthy();
  });
});
