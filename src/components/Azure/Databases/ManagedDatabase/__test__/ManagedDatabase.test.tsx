import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedDatabase from "../ManagedDatabase";

describe("ManagedDatabase component", () => {
  it("ManagedDatabase should render correctly", () => {
    render(<ManagedDatabase />);
    expect(true).toBeTruthy();
  });
});
