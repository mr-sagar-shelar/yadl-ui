import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeamUp from "../TeamUp";

describe("TeamUp component", () => {
  it("TeamUp should render correctly", () => {
    render(<TeamUp />);
    expect(true).toBeTruthy();
  });
});
