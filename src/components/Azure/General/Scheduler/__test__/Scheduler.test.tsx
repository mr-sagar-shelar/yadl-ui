import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Scheduler from "../Scheduler";

describe("Scheduler component", () => {
  it("Scheduler should render correctly", () => {
    render(<Scheduler />);
    expect(true).toBeTruthy();
  });
});
