import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Specs from "../Specs";

describe("Specs component", () => {
  it("Specs should render correctly", () => {
    render(<Specs />);
    expect(true).toBeTruthy();
  });
});
