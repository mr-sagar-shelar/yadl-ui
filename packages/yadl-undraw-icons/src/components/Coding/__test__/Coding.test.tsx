import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Coding from "../Coding";

describe("Coding component", () => {
  it("Coding should render correctly", () => {
    render(<Coding />);
    expect(true).toBeTruthy();
  });
});
