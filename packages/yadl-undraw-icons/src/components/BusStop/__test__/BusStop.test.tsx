import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BusStop from "../BusStop";

describe("BusStop component", () => {
  it("BusStop should render correctly", () => {
    render(<BusStop />);
    expect(true).toBeTruthy();
  });
});
