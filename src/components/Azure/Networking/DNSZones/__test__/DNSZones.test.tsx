import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DNSZones from "../DNSZones";

describe("DNSZones component", () => {
  it("DNSZones should render correctly", () => {
    render(<DNSZones />);
    expect(true).toBeTruthy();
  });
});
