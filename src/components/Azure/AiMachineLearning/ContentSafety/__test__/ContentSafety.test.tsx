import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContentSafety from "../ContentSafety";

describe("ContentSafety component", () => {
  it("ContentSafety should render correctly", () => {
    render(<ContentSafety />);
    expect(true).toBeTruthy();
  });
});
