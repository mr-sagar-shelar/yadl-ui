import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Transcribe from "../Transcribe";

describe("Transcribe component", () => {
  it("Transcribe should render correctly", () => {
    render(<Transcribe />);
    expect(true).toBeTruthy();
  });
});
