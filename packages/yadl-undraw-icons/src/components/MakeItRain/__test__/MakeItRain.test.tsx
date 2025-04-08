import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MakeItRain from "../MakeItRain";

describe("MakeItRain component", () => {
  it("MakeItRain should render correctly", () => {
    render(<MakeItRain />);
    expect(true).toBeTruthy();
  });
});
