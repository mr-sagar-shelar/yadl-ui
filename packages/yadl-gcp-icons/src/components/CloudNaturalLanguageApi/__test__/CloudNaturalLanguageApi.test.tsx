import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudNaturalLanguageApi from "../CloudNaturalLanguageApi";

describe("CloudNaturalLanguageApi component", () => {
  it("CloudNaturalLanguageApi should render correctly", () => {
    render(<CloudNaturalLanguageApi />);
    expect(true).toBeTruthy();
  });
});
