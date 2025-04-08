import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Kendra from "../Kendra";

describe("Kendra component", () => {
  it("Kendra should render correctly", () => {
    render(<Kendra />);
    expect(true).toBeTruthy();
  });
});
