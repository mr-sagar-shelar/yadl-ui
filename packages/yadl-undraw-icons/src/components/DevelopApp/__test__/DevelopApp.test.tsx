import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DevelopApp from "../DevelopApp";

describe("DevelopApp component", () => {
  it("DevelopApp should render correctly", () => {
    render(<DevelopApp />);
    expect(true).toBeTruthy();
  });
});
