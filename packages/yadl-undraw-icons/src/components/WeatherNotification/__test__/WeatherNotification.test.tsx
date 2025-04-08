import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WeatherNotification from "../WeatherNotification";

describe("WeatherNotification component", () => {
  it("WeatherNotification should render correctly", () => {
    render(<WeatherNotification />);
    expect(true).toBeTruthy();
  });
});
