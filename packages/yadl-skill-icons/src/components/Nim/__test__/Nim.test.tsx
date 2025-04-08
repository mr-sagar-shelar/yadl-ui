import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Nim from "../Nim";

describe("Nim component", () => {
  it("Nim should render correctly", () => {
    render(<Nim />);
    expect(true).toBeTruthy();
  });
});
