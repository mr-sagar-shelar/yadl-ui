import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AskMeAnything from "../AskMeAnything";

describe("AskMeAnything component", () => {
  it("AskMeAnything should render correctly", () => {
    render(<AskMeAnything />);
    expect(true).toBeTruthy();
  });
});
