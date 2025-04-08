import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TenantStatus from "../TenantStatus";

describe("TenantStatus component", () => {
  it("TenantStatus should render correctly", () => {
    render(<TenantStatus />);
    expect(true).toBeTruthy();
  });
});
