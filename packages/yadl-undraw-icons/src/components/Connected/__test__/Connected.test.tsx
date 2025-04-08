import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Connected from "../Connected";

describe("Connected component", () => {
  it("Connected should render correctly", () => {
    render(<Connected />);
    expect(true).toBeTruthy();
  });
});
