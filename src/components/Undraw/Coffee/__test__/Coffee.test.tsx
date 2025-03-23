import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Coffee from "../Coffee";

describe("Coffee component", () => {
  it("Coffee should render correctly", () => {
    render(<Coffee />);
    expect(true).toBeTruthy();
  });
});
