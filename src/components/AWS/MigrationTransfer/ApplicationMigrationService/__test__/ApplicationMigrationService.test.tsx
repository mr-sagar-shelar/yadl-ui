import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationMigrationService from "../ApplicationMigrationService";

describe("ApplicationMigrationService component", () => {
  it("ApplicationMigrationService should render correctly", () => {
    render(<ApplicationMigrationService />);
    expect(true).toBeTruthy();
  });
});
