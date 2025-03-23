import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RelaxingAtHome from "../RelaxingAtHome";

describe("RelaxingAtHome component", () => {
  it("RelaxingAtHome should render correctly", () => {
    render(<RelaxingAtHome />);
    expect(true).toBeTruthy();
  });
});
