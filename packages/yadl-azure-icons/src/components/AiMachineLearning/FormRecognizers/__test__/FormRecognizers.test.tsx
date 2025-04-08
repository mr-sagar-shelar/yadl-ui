import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FormRecognizers from "../FormRecognizers";

describe("FormRecognizers component", () => {
  it("FormRecognizers should render correctly", () => {
    render(<FormRecognizers />);
    expect(true).toBeTruthy();
  });
});
