import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReactiveX from "../ReactiveX";

describe("ReactiveX component", () => {
  it("ReactiveX should render correctly", () => {
    render(<ReactiveX />);
    expect(true).toBeTruthy();
  });
});
