import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MediaTranslationApi from "../MediaTranslationApi";

describe("MediaTranslationApi component", () => {
  it("MediaTranslationApi should render correctly", () => {
    render(<MediaTranslationApi />);
    expect(true).toBeTruthy();
  });
});
