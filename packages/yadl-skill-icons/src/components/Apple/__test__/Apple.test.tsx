import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Apple from "../Apple";

describe("Apple component", () => {
  it("Apple should render correctly", () => {
    render(<Apple />);
    expect(true).toBeTruthy();
  });
});
