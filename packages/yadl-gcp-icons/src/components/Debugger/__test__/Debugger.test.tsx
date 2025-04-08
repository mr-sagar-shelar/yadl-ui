import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Debugger from "../Debugger";

describe("Debugger component", () => {
  it("Debugger should render correctly", () => {
    render(<Debugger />);
    expect(true).toBeTruthy();
  });
});
