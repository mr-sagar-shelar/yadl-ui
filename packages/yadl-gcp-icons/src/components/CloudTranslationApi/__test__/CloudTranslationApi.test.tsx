import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudTranslationApi from "../CloudTranslationApi";

describe("CloudTranslationApi component", () => {
  it("CloudTranslationApi should render correctly", () => {
    render(<CloudTranslationApi />);
    expect(true).toBeTruthy();
  });
});
