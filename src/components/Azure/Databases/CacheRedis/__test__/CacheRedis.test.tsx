import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CacheRedis from "../CacheRedis";

describe("CacheRedis component", () => {
  it("CacheRedis should render correctly", () => {
    render(<CacheRedis />);
    expect(true).toBeTruthy();
  });
});
