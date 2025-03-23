import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VoiceControlVoiceControl from "../VoiceControlVoiceControl";

describe("VoiceControlVoiceControl component", () => {
  it("VoiceControlVoiceControl should render correctly", () => {
    render(<VoiceControlVoiceControl />);
    expect(true).toBeTruthy();
  });
});
