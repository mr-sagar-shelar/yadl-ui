import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSQLServerStretchDatabases from "../AzureSQLServerStretchDatabases";

describe("AzureSQLServerStretchDatabases component", () => {
  it("AzureSQLServerStretchDatabases should render correctly", () => {
    render(<AzureSQLServerStretchDatabases />);
    expect(true).toBeTruthy();
  });
});
