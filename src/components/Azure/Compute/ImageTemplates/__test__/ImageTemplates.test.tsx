import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageTemplates from "../ImageTemplates";

describe("ImageTemplates component", () => {
  it("ImageTemplates should render correctly", () => {
    render(<ImageTemplates />);
    expect(true).toBeTruthy();
  });
});
