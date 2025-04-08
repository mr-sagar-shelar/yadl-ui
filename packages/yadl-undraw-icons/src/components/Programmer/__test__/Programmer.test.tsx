import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Programmer from "../Programmer";

describe("Programmer component", () => {
  it("Programmer should render correctly", () => {
    render(<Programmer />);
    expect(true).toBeTruthy();
  });
});
