import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Julia from "../Julia";

describe("Julia component", () => {
  it("Julia should render correctly", () => {
    render(<Julia />);
    expect(true).toBeTruthy();
  });
});
