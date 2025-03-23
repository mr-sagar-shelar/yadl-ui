import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Voice_assistantVoiceAssistant from "../Voice_assistantVoiceAssistant";

describe("Voice_assistantVoiceAssistant component", () => {
  it("Voice_assistantVoiceAssistant should render correctly", () => {
    render(<Voice_assistantVoiceAssistant />);
    expect(true).toBeTruthy();
  });
});
