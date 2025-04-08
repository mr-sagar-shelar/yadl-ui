import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StaticApps from "../StaticApps";

describe("StaticApps component", () => {
  it("StaticApps should render correctly", () => {
    render(<StaticApps />);
    expect(true).toBeTruthy();
  });
});
