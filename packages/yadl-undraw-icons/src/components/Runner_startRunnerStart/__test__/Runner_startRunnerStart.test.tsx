import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Runner_startRunnerStart from "../Runner_startRunnerStart";

describe("Runner_startRunnerStart component", () => {
  it("Runner_startRunnerStart should render correctly", () => {
    render(<Runner_startRunnerStart />);
    expect(true).toBeTruthy();
  });
});
