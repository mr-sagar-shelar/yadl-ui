import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Electricity from "../Electricity";

describe("Electricity component", () => {
  it("Electricity should render correctly", () => {
    render(<Electricity />);
    expect(true).toBeTruthy();
  });
});
