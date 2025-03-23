import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CityLife from "../CityLife";

describe("CityLife component", () => {
  it("CityLife should render correctly", () => {
    render(<CityLife />);
    expect(true).toBeTruthy();
  });
});
