import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudVpn from "../CloudVpn";

describe("CloudVpn component", () => {
  it("CloudVpn should render correctly", () => {
    render(<CloudVpn />);
    expect(true).toBeTruthy();
  });
});
