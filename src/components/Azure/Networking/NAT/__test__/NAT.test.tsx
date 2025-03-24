import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NAT from "../NAT";

describe("NAT component", () => {
  it("NAT should render correctly", () => {
    render(<NAT />);
    expect(true).toBeTruthy();
  });
});
