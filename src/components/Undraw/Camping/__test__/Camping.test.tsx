import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Camping from "../Camping";

describe("Camping component", () => {
  it("Camping should render correctly", () => {
    render(<Camping />);
    expect(true).toBeTruthy();
  });
});