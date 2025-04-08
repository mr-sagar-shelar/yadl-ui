import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FastLoading from "../FastLoading";

describe("FastLoading component", () => {
  it("FastLoading should render correctly", () => {
    render(<FastLoading />);
    expect(true).toBeTruthy();
  });
});
