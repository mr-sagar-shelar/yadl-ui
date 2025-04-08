import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SpeechServices from "../SpeechServices";

describe("SpeechServices component", () => {
  it("SpeechServices should render correctly", () => {
    render(<SpeechServices />);
    expect(true).toBeTruthy();
  });
});
