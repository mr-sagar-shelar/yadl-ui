import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MicrosoftDevBox from "../MicrosoftDevBox";

describe("MicrosoftDevBox component", () => {
  it("MicrosoftDevBox should render correctly", () => {
    render(<MicrosoftDevBox />);
    expect(true).toBeTruthy();
  });
});
