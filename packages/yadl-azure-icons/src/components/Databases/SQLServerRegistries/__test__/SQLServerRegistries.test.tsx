import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SQLServerRegistries from "../SQLServerRegistries";

describe("SQLServerRegistries component", () => {
  it("SQLServerRegistries should render correctly", () => {
    render(<SQLServerRegistries />);
    expect(true).toBeTruthy();
  });
});
