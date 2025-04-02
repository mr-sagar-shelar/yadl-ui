import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebStorm from "../WebStorm";

describe("WebStorm component", () => {
  it("WebStorm should render correctly", () => {
    render(<WebStorm />);
    expect(true).toBeTruthy();
  });
});
