import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Inspiration from "../Inspiration";

describe("Inspiration component", () => {
  it("Inspiration should render correctly", () => {
    render(<Inspiration />);
    expect(true).toBeTruthy();
  });
});
