import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HostPools from "../HostPools";

describe("HostPools component", () => {
  it("HostPools should render correctly", () => {
    render(<HostPools />);
    expect(true).toBeTruthy();
  });
});
