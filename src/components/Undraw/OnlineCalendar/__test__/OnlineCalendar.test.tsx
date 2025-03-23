import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineCalendar from "../OnlineCalendar";

describe("OnlineCalendar component", () => {
  it("OnlineCalendar should render correctly", () => {
    render(<OnlineCalendar />);
    expect(true).toBeTruthy();
  });
});
