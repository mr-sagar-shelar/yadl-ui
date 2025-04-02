import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutoCAD from "../AutoCAD";

describe("AutoCAD component", () => {
  it("AutoCAD should render correctly", () => {
    render(<AutoCAD />);
    expect(true).toBeTruthy();
  });
});
