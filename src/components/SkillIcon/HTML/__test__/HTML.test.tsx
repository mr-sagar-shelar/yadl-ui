import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HTML from "../HTML";

describe("HTML component", () => {
  it("HTML should render correctly", () => {
    render(<HTML />);
    expect(true).toBeTruthy();
  });
});
