import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Calling from "../Calling";

describe("Calling component", () => {
  it("Calling should render correctly", () => {
    render(<Calling />);
    expect(true).toBeTruthy();
  });
});
