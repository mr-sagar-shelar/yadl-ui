import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyApp from "../MyApp";

describe("MyApp component", () => {
  it("MyApp should render correctly", () => {
    render(<MyApp />);
    expect(true).toBeTruthy();
  });
});
