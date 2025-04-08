import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElastiCache from "../ElastiCache";

describe("ElastiCache component", () => {
  it("ElastiCache should render correctly", () => {
    render(<ElastiCache />);
    expect(true).toBeTruthy();
  });
});
