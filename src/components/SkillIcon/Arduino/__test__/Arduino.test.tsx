import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Arduino from "../Arduino";

describe("Arduino component", () => {
  it("Arduino should render correctly", () => {
    render(<Arduino />);
    expect(true).toBeTruthy();
  });
});
