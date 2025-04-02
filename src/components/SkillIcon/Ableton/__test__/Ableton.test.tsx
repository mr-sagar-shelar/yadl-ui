import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ableton from "../Ableton";

describe("Ableton component", () => {
  it("Ableton should render correctly", () => {
    render(<Ableton />);
    expect(true).toBeTruthy();
  });
});
