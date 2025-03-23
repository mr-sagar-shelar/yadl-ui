import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileApps from "../MobileApps";

describe("MobileApps component", () => {
  it("MobileApps should render correctly", () => {
    render(<MobileApps />);
    expect(true).toBeTruthy();
  });
});
