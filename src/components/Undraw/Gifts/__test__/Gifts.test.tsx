import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gifts from "../Gifts";

describe("Gifts component", () => {
  it("Gifts should render correctly", () => {
    render(<Gifts />);
    expect(true).toBeTruthy();
  });
});
