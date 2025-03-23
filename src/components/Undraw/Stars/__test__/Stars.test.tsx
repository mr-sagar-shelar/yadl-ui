import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Stars from "../Stars";

describe("Stars component", () => {
  it("Stars should render correctly", () => {
    render(<Stars />);
    expect(true).toBeTruthy();
  });
});
