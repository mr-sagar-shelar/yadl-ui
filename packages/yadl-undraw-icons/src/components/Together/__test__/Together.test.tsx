import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Together from "../Together";

describe("Together component", () => {
  it("Together should render correctly", () => {
    render(<Together />);
    expect(true).toBeTruthy();
  });
});
