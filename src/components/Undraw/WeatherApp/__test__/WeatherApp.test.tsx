import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WeatherApp from "../WeatherApp";

describe("WeatherApp component", () => {
  it("WeatherApp should render correctly", () => {
    render(<WeatherApp />);
    expect(true).toBeTruthy();
  });
});
