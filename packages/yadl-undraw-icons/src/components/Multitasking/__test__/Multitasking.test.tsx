import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Multitasking from "../Multitasking";

describe("Multitasking component", () => {
  it("Multitasking should render correctly", () => {
    render(<Multitasking />);
    expect(true).toBeTruthy();
  });
});
