import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Alerts from "../Alerts";

describe("Alerts component", () => {
  it("Alerts should render correctly", () => {
    render(<Alerts />);
    expect(true).toBeTruthy();
  });
});
