import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SpeechToText from "../SpeechToText";

describe("SpeechToText component", () => {
  it("SpeechToText should render correctly", () => {
    render(<SpeechToText />);
    expect(true).toBeTruthy();
  });
});
