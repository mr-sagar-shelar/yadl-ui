import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChimeVoiceConnector from "../ChimeVoiceConnector";

describe("ChimeVoiceConnector component", () => {
  it("ChimeVoiceConnector should render correctly", () => {
    render(<ChimeVoiceConnector />);
    expect(true).toBeTruthy();
  });
});
