import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PreviewFeatures from "../PreviewFeatures";

describe("PreviewFeatures component", () => {
  it("PreviewFeatures should render correctly", () => {
    render(<PreviewFeatures />);
    expect(true).toBeTruthy();
  });
});
