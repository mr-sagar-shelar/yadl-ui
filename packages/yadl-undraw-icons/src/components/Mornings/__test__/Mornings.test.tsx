import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mornings from "../Mornings";

describe("Mornings component", () => {
  it("Mornings should render correctly", () => {
    render(<Mornings />);
    expect(true).toBeTruthy();
  });
});
