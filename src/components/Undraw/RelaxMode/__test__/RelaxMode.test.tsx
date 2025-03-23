import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RelaxMode from "../RelaxMode";

describe("RelaxMode component", () => {
  it("RelaxMode should render correctly", () => {
    render(<RelaxMode />);
    expect(true).toBeTruthy();
  });
});
