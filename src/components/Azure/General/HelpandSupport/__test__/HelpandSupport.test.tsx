import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HelpandSupport from "../HelpandSupport";

describe("HelpandSupport component", () => {
  it("HelpandSupport should render correctly", () => {
    render(<HelpandSupport />);
    expect(true).toBeTruthy();
  });
});
