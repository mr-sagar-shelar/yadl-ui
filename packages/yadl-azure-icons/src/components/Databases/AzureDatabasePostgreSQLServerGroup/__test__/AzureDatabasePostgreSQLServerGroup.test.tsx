import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDatabasePostgreSQLServerGroup from "../AzureDatabasePostgreSQLServerGroup";

describe("AzureDatabasePostgreSQLServerGroup component", () => {
  it("AzureDatabasePostgreSQLServerGroup should render correctly", () => {
    render(<AzureDatabasePostgreSQLServerGroup />);
    expect(true).toBeTruthy();
  });
});
