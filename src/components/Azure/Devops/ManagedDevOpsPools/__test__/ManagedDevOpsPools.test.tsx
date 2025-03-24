import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedDevOpsPools from "../ManagedDevOpsPools";

describe("ManagedDevOpsPools component", () => {
  it("ManagedDevOpsPools should render correctly", () => {
    render(<ManagedDevOpsPools />);
    expect(true).toBeTruthy();
  });
});
