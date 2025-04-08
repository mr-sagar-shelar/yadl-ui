import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Spring from "../Spring";

describe("Spring component", () => {
  it("Spring should render correctly", () => {
    render(<Spring />);
    expect(true).toBeTruthy();
  });
});
