import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Texttospeech from "../Texttospeech";

describe("Texttospeech component", () => {
  it("Texttospeech should render correctly", () => {
    render(<Texttospeech />);
    expect(true).toBeTruthy();
  });
});
