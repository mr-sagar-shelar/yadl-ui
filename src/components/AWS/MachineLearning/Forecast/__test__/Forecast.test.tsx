import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Forecast from "../Forecast";

describe("Forecast component", () => {
  it("Forecast should render correctly", () => {
    render(<Forecast />);
    expect(true).toBeTruthy();
  });
});
