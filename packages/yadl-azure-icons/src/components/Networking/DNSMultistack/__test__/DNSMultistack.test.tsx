import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DNSMultistack from "../DNSMultistack";

describe("DNSMultistack component", () => {
  it("DNSMultistack should render correctly", () => {
    render(<DNSMultistack />);
    expect(true).toBeTruthy();
  });
});
