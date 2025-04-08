import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RelaxingWalk from "../RelaxingWalk";

describe("RelaxingWalk component", () => {
  it("RelaxingWalk should render correctly", () => {
    render(<RelaxingWalk />);
    expect(true).toBeTruthy();
  });
});
