import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Survey from "../Survey";

describe("Survey component", () => {
  it("Survey should render correctly", () => {
    render(<Survey />);
    expect(true).toBeTruthy();
  });
});
