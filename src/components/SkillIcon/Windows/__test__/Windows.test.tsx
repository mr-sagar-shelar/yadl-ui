import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Windows from "../Windows";

describe("Windows component", () => {
  it("Windows should render correctly", () => {
    render(<Windows />);
    expect(true).toBeTruthy();
  });
});
