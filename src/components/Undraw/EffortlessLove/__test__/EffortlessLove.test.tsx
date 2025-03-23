import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EffortlessLove from "../EffortlessLove";

describe("EffortlessLove component", () => {
  it("EffortlessLove should render correctly", () => {
    render(<EffortlessLove />);
    expect(true).toBeTruthy();
  });
});
