import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NextJS from "../NextJS";

describe("NextJS component", () => {
  it("NextJS should render correctly", () => {
    render(<NextJS />);
    expect(true).toBeTruthy();
  });
});
