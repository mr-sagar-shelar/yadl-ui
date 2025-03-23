import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReviewedDocs from "../ReviewedDocs";

describe("ReviewedDocs component", () => {
  it("ReviewedDocs should render correctly", () => {
    render(<ReviewedDocs />);
    expect(true).toBeTruthy();
  });
});
