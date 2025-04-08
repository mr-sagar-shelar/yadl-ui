import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileBrowsers from "../MobileBrowsers";

describe("MobileBrowsers component", () => {
  it("MobileBrowsers should render correctly", () => {
    render(<MobileBrowsers />);
    expect(true).toBeTruthy();
  });
});
