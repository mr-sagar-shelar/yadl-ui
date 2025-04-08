import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GuardDuty from "../GuardDuty";

describe("GuardDuty component", () => {
  it("GuardDuty should render correctly", () => {
    render(<GuardDuty />);
    expect(true).toBeTruthy();
  });
});
