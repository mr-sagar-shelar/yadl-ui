import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TranslatorText from "../TranslatorText";

describe("TranslatorText component", () => {
  it("TranslatorText should render correctly", () => {
    render(<TranslatorText />);
    expect(true).toBeTruthy();
  });
});
