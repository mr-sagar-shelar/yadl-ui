import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MicrosoftDefenderforCloud from "../MicrosoftDefenderforCloud";

describe("MicrosoftDefenderforCloud component", () => {
  it("MicrosoftDefenderforCloud should render correctly", () => {
    render(<MicrosoftDefenderforCloud />);
    expect(true).toBeTruthy();
  });
});
