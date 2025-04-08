import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vitest from "../Vitest";

describe("Vitest component", () => {
  it("Vitest should render correctly", () => {
    render(<Vitest />);
    expect(true).toBeTruthy();
  });
});
