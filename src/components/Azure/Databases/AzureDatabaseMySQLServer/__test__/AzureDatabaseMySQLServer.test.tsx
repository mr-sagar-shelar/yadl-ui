import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDatabaseMySQLServer from "../AzureDatabaseMySQLServer";

describe("AzureDatabaseMySQLServer component", () => {
  it("AzureDatabaseMySQLServer should render correctly", () => {
    render(<AzureDatabaseMySQLServer />);
    expect(true).toBeTruthy();
  });
});
