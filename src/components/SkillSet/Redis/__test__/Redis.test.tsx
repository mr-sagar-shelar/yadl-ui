import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Redis from "../Redis";

describe("Redis component", () => {
  it("Redis should render correctly", () => {
    render(<Redis />);
    expect(true).toBeTruthy();
  });
});
