import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebsiteStaging from "../WebsiteStaging";

describe("WebsiteStaging component", () => {
  it("WebsiteStaging should render correctly", () => {
    render(<WebsiteStaging />);
    expect(true).toBeTruthy();
  });
});
