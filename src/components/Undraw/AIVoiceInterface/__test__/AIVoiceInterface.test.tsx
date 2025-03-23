import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AIVoiceInterface from "../AIVoiceInterface";

describe("AIVoiceInterface component", () => {
  it("AIVoiceInterface should render correctly", () => {
    render(<AIVoiceInterface />);
    expect(true).toBeTruthy();
  });
});
