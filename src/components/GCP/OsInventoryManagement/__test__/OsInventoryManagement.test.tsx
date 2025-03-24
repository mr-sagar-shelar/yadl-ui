import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OsInventoryManagement from "../OsInventoryManagement";

describe("OsInventoryManagement component", () => {
  it("OsInventoryManagement should render correctly", () => {
    render(<OsInventoryManagement />);
    expect(true).toBeTruthy();
  });
});
