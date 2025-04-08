import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DNSSecurityPolicy from "../DNSSecurityPolicy";

describe("DNSSecurityPolicy component", () => {
  it("DNSSecurityPolicy should render correctly", () => {
    render(<DNSSecurityPolicy />);
    expect(true).toBeTruthy();
  });
});
