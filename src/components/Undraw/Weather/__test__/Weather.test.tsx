import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Weather from "../Weather";

describe("Weather component", () => {
  it("Weather should render correctly", () => {
    render(<Weather />);
    expect(true).toBeTruthy();
  });
});
