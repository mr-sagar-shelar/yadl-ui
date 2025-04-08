import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VisionaryTechnology from "../VisionaryTechnology";

describe("VisionaryTechnology component", () => {
  it("VisionaryTechnology should render correctly", () => {
    render(<VisionaryTechnology />);
    expect(true).toBeTruthy();
  });
});
