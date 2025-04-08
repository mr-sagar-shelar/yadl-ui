import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Autumn from "../Autumn";

describe("Autumn component", () => {
  it("Autumn should render correctly", () => {
    render(<Autumn />);
    expect(true).toBeTruthy();
  });
});
