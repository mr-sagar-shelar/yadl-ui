import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDatabaseMigrationServices from "../AzureDatabaseMigrationServices";

describe("AzureDatabaseMigrationServices component", () => {
  it("AzureDatabaseMigrationServices should render correctly", () => {
    render(<AzureDatabaseMigrationServices />);
    expect(true).toBeTruthy();
  });
});
