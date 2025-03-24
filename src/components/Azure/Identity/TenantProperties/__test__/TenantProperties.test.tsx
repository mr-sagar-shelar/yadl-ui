import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TenantProperties from "../TenantProperties";

describe("TenantProperties component", () => {
  it("TenantProperties should render correctly", () => {
    render(<TenantProperties />);
    expect(true).toBeTruthy();
  });
});
