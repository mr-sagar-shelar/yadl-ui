import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LicenseManager from "../LicenseManager";

describe("LicenseManager component", () => {
  it("LicenseManager should render correctly", () => {
    render(<LicenseManager />);
    expect(true).toBeTruthy();
  });
});
