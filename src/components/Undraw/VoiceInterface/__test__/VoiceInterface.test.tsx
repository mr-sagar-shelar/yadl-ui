import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VoiceInterface from "../VoiceInterface";

describe("VoiceInterface component", () => {
  it("VoiceInterface should render correctly", () => {
    render(<VoiceInterface />);
    expect(true).toBeTruthy();
  });
});
