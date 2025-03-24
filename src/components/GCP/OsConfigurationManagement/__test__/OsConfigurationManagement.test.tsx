import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OsConfigurationManagement from "../OsConfigurationManagement";

describe("OsConfigurationManagement component", () => {
  it("OsConfigurationManagement should render correctly", () => {
    render(<OsConfigurationManagement />);
    expect(true).toBeTruthy();
  });
});
