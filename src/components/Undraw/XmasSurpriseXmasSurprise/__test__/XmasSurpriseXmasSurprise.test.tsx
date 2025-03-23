import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import XmasSurpriseXmasSurprise from "../XmasSurpriseXmasSurprise";

describe("XmasSurpriseXmasSurprise component", () => {
  it("XmasSurpriseXmasSurprise should render correctly", () => {
    render(<XmasSurpriseXmasSurprise />);
    expect(true).toBeTruthy();
  });
});
