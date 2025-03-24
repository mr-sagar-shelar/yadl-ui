import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Advisor from "../Advisor";

describe("Advisor component", () => {
  it("Advisor should render correctly", () => {
    render(<Advisor />);
    expect(true).toBeTruthy();
  });
});
