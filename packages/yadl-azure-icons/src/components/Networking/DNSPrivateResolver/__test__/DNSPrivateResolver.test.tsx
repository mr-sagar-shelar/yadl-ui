import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DNSPrivateResolver from "../DNSPrivateResolver";

describe("DNSPrivateResolver component", () => {
  it("DNSPrivateResolver should render correctly", () => {
    render(<DNSPrivateResolver />);
    expect(true).toBeTruthy();
  });
});
