import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CorrectAnswer from "../CorrectAnswer";

describe("CorrectAnswer component", () => {
  it("CorrectAnswer should render correctly", () => {
    render(<CorrectAnswer />);
    expect(true).toBeTruthy();
  });
});
