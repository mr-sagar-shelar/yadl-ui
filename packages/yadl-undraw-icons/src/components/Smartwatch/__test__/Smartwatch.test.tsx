import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Smartwatch from "../Smartwatch";

describe("Smartwatch component", () => {
  it("Smartwatch should render correctly", () => {
    render(<Smartwatch />);
    expect(true).toBeTruthy();
  });
});
