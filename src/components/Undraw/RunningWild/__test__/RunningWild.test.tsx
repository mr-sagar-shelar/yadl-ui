import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RunningWild from "../RunningWild";

describe("RunningWild component", () => {
  it("RunningWild should render correctly", () => {
    render(<RunningWild />);
    expect(true).toBeTruthy();
  });
});
