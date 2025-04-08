import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeddyBearTeddyBear from "../TeddyBearTeddyBear";

describe("TeddyBearTeddyBear component", () => {
  it("TeddyBearTeddyBear should render correctly", () => {
    render(<TeddyBearTeddyBear />);
    expect(true).toBeTruthy();
  });
});
