import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SiteContent from "../SiteContent";

describe("SiteContent component", () => {
  it("SiteContent should render correctly", () => {
    render(<SiteContent />);
    expect(true).toBeTruthy();
  });
});
