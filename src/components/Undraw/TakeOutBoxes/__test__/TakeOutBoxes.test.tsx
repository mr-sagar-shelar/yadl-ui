import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TakeOutBoxes from "../TakeOutBoxes";

describe("TakeOutBoxes component", () => {
  it("TakeOutBoxes should render correctly", () => {
    render(<TakeOutBoxes />);
    expect(true).toBeTruthy();
  });
});
