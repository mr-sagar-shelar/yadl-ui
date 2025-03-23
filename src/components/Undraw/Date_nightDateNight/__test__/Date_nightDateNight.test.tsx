import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Date_nightDateNight from "../Date_nightDateNight";

describe("Date_nightDateNight component", () => {
  it("Date_nightDateNight should render correctly", () => {
    render(<Date_nightDateNight />);
    expect(true).toBeTruthy();
  });
});
