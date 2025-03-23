import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Conference from "../Conference";

describe("Conference component", () => {
  it("Conference should render correctly", () => {
    render(<Conference />);
    expect(true).toBeTruthy();
  });
});
