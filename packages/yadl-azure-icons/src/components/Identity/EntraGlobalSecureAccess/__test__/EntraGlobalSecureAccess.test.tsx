import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraGlobalSecureAccess from "../EntraGlobalSecureAccess";

describe("EntraGlobalSecureAccess component", () => {
  it("EntraGlobalSecureAccess should render correctly", () => {
    render(<EntraGlobalSecureAccess />);
    expect(true).toBeTruthy();
  });
});
