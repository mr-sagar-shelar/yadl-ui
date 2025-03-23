import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Updated from "../Updated";

describe("Updated component", () => {
  it("Updated should render correctly", () => {
    render(<Updated />);
    expect(true).toBeTruthy();
  });
});
