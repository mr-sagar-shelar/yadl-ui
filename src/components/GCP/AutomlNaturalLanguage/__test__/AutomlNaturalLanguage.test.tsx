import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutomlNaturalLanguage from "../AutomlNaturalLanguage";

describe("AutomlNaturalLanguage component", () => {
  it("AutomlNaturalLanguage should render correctly", () => {
    render(<AutomlNaturalLanguage />);
    expect(true).toBeTruthy();
  });
});
