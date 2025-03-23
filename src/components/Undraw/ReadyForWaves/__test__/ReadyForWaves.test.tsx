import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReadyForWaves from "../ReadyForWaves";

describe("ReadyForWaves component", () => {
  it("ReadyForWaves should render correctly", () => {
    render(<ReadyForWaves />);
    expect(true).toBeTruthy();
  });
});
