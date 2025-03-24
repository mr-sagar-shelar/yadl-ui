import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkFirewall from "../NetworkFirewall";

describe("NetworkFirewall component", () => {
  it("NetworkFirewall should render correctly", () => {
    render(<NetworkFirewall />);
    expect(true).toBeTruthy();
  });
});
