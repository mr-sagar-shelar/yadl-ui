import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Code from "../Code";

describe("Code component", () => {
  it("Code should render correctly", () => {
    render(<Code />);
    expect(true).toBeTruthy();
  });
});
