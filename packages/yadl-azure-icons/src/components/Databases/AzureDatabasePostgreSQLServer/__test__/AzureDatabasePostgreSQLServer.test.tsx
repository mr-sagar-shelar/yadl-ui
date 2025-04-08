import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDatabasePostgreSQLServer from "../AzureDatabasePostgreSQLServer";

describe("AzureDatabasePostgreSQLServer component", () => {
  it("AzureDatabasePostgreSQLServer should render correctly", () => {
    render(<AzureDatabasePostgreSQLServer />);
    expect(true).toBeTruthy();
  });
});
