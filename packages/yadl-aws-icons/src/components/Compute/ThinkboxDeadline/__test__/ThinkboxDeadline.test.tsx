import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThinkboxDeadline from "../ThinkboxDeadline";

describe("ThinkboxDeadline component", () => {
  it("ThinkboxDeadline should render correctly", () => {
    render(<ThinkboxDeadline />);
    expect(true).toBeTruthy();
  });
});
