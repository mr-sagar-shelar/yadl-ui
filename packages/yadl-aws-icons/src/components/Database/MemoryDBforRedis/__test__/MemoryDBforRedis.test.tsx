import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MemoryDBforRedis from "../MemoryDBforRedis";

describe("MemoryDBforRedis component", () => {
  it("MemoryDBforRedis should render correctly", () => {
    render(<MemoryDBforRedis />);
    expect(true).toBeTruthy();
  });
});
