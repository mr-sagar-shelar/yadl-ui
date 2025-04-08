import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Regex from "../Regex";

describe("Regex component", () => {
  it("Regex should render correctly", () => {
    render(<Regex />);
    expect(true).toBeTruthy();
  });
});
