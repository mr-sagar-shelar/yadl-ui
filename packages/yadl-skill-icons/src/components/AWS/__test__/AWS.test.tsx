import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AWS from "../AWS";

describe("AWS component", () => {
  it("AWS should render correctly", () => {
    render(<AWS />);
    expect(true).toBeTruthy();
  });
});
